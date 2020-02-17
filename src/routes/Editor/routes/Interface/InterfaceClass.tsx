import React, { Component } from 'react';
import { fabric } from 'fabric';

import EditorLayout from '../../../../layouts/EditorLayout';
import ToolBars from '../../../../components/Toolbars';
import Content from '../../../../components/Content';
import Footer from '../../../../components/Footer';
import Tool from '../../../../components/Tool';
import './Interface.scss';
import Tabs from '../../../../components/Tabs';


const {
  ToolBarRight,
  ToolBarLeft,
  ToolBarTop,
} = ToolBars;

const divStyles = {
  color: '#fff',
  fontSize: 10,
  fontWeight: 700,
};

class Interface extends Component {
  canvas: any = null;

  state = {
    activeObject: null,
    isDrawingMode: false,
    elementName: '',
    selectedAreaCoordinate: {
      x: 0,
      y: 0
    }
  }

  componentDidMount() {
    this.canvas = new fabric.Canvas('editor');
    const { canvas } = this;

    if (canvas.requestFullScreen) {
      canvas.requestFullScreen();
    }
    else if (canvas.webkitRequestFullScreen) {
      canvas.webkitRequestFullScreen();
    }
    else if (canvas.mozRequestFullScreen) {
      canvas.mozRequestFullScreen();
    }

    this.canvas.on('selection:created', this.onSelect);
    this.canvas.on('selection:updated', this.onSelect);

    this.addMouseEvents()
  }

  addMouseEvents() {
    document.addEventListener('mousedown', this.onMouseDown, false);
    document.addEventListener('mouseup', this.onMouseUp, false);
    document.addEventListener('keydown', this.remove, false);
  }

  selectShape = (elementName: string) => {
    this.setState({ elementName });
  }

  onMouseDown = (e: any) => {
    if (this.state.elementName) {
      this.setState({
        selectedAreaCoordinate: {
          x: e.offsetX,
          y: e.offsetY
        }
      })
    }
  };

  onMouseUp = (e: any) => {
    if (this.state.elementName.length) {
      const { x, y } = this.state.selectedAreaCoordinate
      const left = x > e.offsetX ? e.offsetX : x;
      const top = y > e.offsetY ? e.offsetY : y;
      const width = Math.abs(x - e.offsetX);
      const height = Math.abs(y - e.offsetY);

      switch (this.state.elementName) {
        case 'Squre': {
          this.onSqure(width, height, left, top);
          break;
        }
        default: {
          console.log('You have a strange Mouse!');
        }
      }
    }
  }

  onSelect = () => {
    this.setState({ elementName: '' });
    const activeObject = this.canvas.getActiveObject();
    console.log('>>>>>', activeObject);
    this.setState({
      activeObject
    })
  }

  remove = (e: any) => {
    if (e.keyCode === 8) {
      const activeObject: any = this.state.activeObject;
      if (activeObject && activeObject._objects) {
        for (const item of activeObject._objects) {
          this.canvas.remove(item);
        }
      } else {
        this.canvas.remove(this.state.activeObject);
      }

    }
  }

  onSqure = (width: number, height: number, left: number, top: number) => {
    const squre = new fabric.Rect({
      left,
      top,
      width,
      height,
      fill: '#345',
      originX: 'left',
      originY: 'top',
      stroke: "#000",
      strokeWidth: 1,
      centeredRotation: true,
    });

    this.canvas.add(squre);
  };

  onCircle = () => {
    const circle = new fabric.Circle({
      left: 60,
      top: 60,
      strokeWidth: 150,
      radius: 50,
      fill: "#848bb3",
      stroke: '#848bb3',
    });

    this.canvas.add(circle);
  }

  onLine = () => {
    const line = new fabric.Line([0, 0, 0, 200], {
      fill: 'red',
      stroke: 'red',
      strokeWidth: 2,
      hasControls: true,
      hasRotatingPoint: true,
      padding: 10,
      left: 80,
      top: 50
    });

    this.canvas.add(line);
  }

  text = () => {
    const text = new fabric.Textbox('MyText', {
      width: 150,
      top: 5,
      left: 5,
      fontSize: 16,
      textAlign: 'center',
    });

    this.canvas.add(text);
  };

  // onImage = (event: any) => {
  //   console.log(event.target.files[0])
  //   this.setState({
  //     file: URL.createObjectURL(event.target.files[0])
  //   })
  //   const canvas = this.canvas;
  //   fabric.Image.fromURL(this.state.file, function (img) {
  //     img.scale(0.5).set({
  //       left: 100,
  //       top: 100,
  //     });
  //     canvas.add(img).setActiveObject(img);
  //   });
  // }

  onImage = (e: any) => {
    const canvas = this.canvas;
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function (f: any) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function (img: any) {
        console.log('>>>>', 1024 / img.width);
        var oImg = img.set({
          left: 0,
          top: 0,
        });
        oImg.scaleToWidth(150);
        oImg.scaleToHeight(100);

        canvas.add(oImg).renderAll();
      });
    };
    reader.readAsDataURL(file);
  }

  changeDrawingMode = () => {
    this.canvas.isDrawingMode = !this.canvas.isDrawingMode;

    //@ts-ignore1
    new fabric.PatternBrush(this.canvas);
  }

  render() {
    const { onLine, onCircle, changeDrawingMode, text, onImage, remove } = this;
    return (
      <div className="Interface">
        <ToolBarLeft>
          <Tool iconName="selection" onClick={() => this.selectShape('Squre')} />
          <Tool iconName="shape_tools" children={[
            <Tool key='0' iconName="line_tools" onClick={onLine} />,
            <Tool key='1' iconName="rectangle_tools" onClick={() => this.selectShape('Squre')} />,
            <Tool key='2' iconName="oval_tools" onClick={onCircle} />
          ]} />
          <Tool iconName="drawing" onClick={changeDrawingMode} />
          <Tool iconName="text" onClick={text} />
          <input type="file" onChange={(e) => this.onImage(e)} />
          <Tool iconName="polaroid" />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool />
          <Tool onClick={text} />
        </ToolBarLeft>
        <ToolBarRight>
          <Tool />
          <Tool />
          <Tool />
        </ToolBarRight>
        <ToolBarTop>
          <Tool />
        </ToolBarTop>
        <Content>
          <canvas id="editor" width="1800px" height="1800px" ></canvas>
        </Content>
        <Footer>
          <div style={divStyles}>English</div>
        </Footer>

        <br />
        <br />
        <br />
        <br />
        <br />
        <Tabs>
          <Tabs.Tab tab="Tab 1">
            <div>Tab 1</div>
          </Tabs.Tab>
          <Tabs.Tab tab="Tab 2">
            <div>Tab 2</div>
          </Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}
export { Interface }