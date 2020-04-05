import * as React from "react";
// import ColorWheel from 'color-wheel';
import { SketchPicker } from "react-color";

import EditorInput from "../../EditorInput";
import "./Top.scss";
import { useContext } from "react";
import { InterfaceContext } from "../../../routes/Editor/routes/Interface";

export type TopProps = {
  children?: React.ReactElement | React.ReactElement[];
};

export const Top: React.FC<TopProps> = ({ children }) => {
  const [fillPicker, openFillPicker] = React.useState(false);
  const [storkPicker, openStorkPicker] = React.useState(false);

  const openColorPicker = (name: string) => {
    if (name === "fill") {
      openFillPicker(!fillPicker);
      openStorkPicker(false);
    } else {
      openStorkPicker(!storkPicker);
      openFillPicker(false);
    }
  };

  const {
    activeObject,
    changeObjectPrimitiveParamter,
    changeObjectCalculatedParamter,
    changeObjectAngles,
    changeLayoutZIndex,
    changeColor
  }: any = useContext(InterfaceContext);

  return (
    <div className="Top">
      <EditorInput
        onChange={changeObjectPrimitiveParamter}
        name="left"
        title="X"
        inputValue={"left" in activeObject ? Math.round(activeObject.left) : 0}
      />
      <EditorInput
        onChange={changeObjectCalculatedParamter}
        name="width"
        title="Width"
        inputValue={
          "width" in activeObject && "scaleX" in activeObject
            ? Math.round(activeObject.width * JSON.parse(activeObject.scaleX))
            : 0
        }
      />
      <EditorInput
        onChange={changeObjectPrimitiveParamter}
        name="strokeWidth"
        title="Border"
        inputValue={
          "strokeWidth" in activeObject ? activeObject.strokeWidth : 0
        }
      />
      <EditorInput
        onChange={changeObjectCalculatedParamter}
        name="angle"
        maxValue={360}
        title="Angel"
        inputValue={"angle" in activeObject ? activeObject.angle : 0}
      />
      <EditorInput
        onChange={changeObjectAngles}
        name="1"
        step={0.02}
        title="Angel B"
        inputValue={
          "transformMatrix" in activeObject
            ? activeObject.transformMatrix
              ? activeObject.transformMatrix[1]
              : activeObject.calcTransformMatrix()[1]
            : 0
        }
      />
      <EditorInput
        onChange={changeObjectAngles}
        name="3"
        step={0.02}
        title="Angel D"
        inputValue={
          "transformMatrix" in activeObject
            ? activeObject.transformMatrix
              ? activeObject.transformMatrix[3]
              : activeObject.calcTransformMatrix()[3]
            : 0
        }
      />
      <EditorInput
        onChange={changeObjectAngles}
        name="5"
        title="Angel TY"
        step={0.02}
        inputValue={
          "transformMatrix" in activeObject
            ? activeObject.transformMatrix
              ? activeObject.transformMatrix[5]
              : activeObject.calcTransformMatrix()[5]
            : 0
        }
      />
      <div className="color-picker">
        <span className="title">Border Color</span>
        <span
          className="color-content"
          onClick={() => openColorPicker("stroke")}
          style={{
            backgroundColor: activeObject.stroke
              ? activeObject.stroke
              : "#FFFFFF"
          }}
        ></span>
        {storkPicker ? (
          <SketchPicker
            color={activeObject.stroke ? activeObject.stroke : "#FFFFFF"}
            onChange={(color: any) => changeColor(color, "stroke")}
          />
        ) : (
          ""
        )}
      </div>
      <EditorInput
        onChange={changeObjectPrimitiveParamter}
        title="Y"
        name="top"
        inputValue={"top" in activeObject ? Math.round(activeObject.top) : 0}
      />
      <EditorInput
        onChange={changeObjectCalculatedParamter}
        title="Height"
        name="height"
        inputValue={
          "height" in activeObject && "scaleY" in activeObject
            ? Math.round(activeObject.height * JSON.parse(activeObject.scaleY))
            : 0
        }
      />
      <EditorInput
        onChange={changeObjectPrimitiveParamter}
        title="Border Radius"
        name="rx_ry"
        inputValue={"rx" in activeObject ? activeObject.rx : 0}
      />
      <EditorInput
        onChange={changeObjectAngles}
        name="0"
        step={0.02}
        title="Angel A"
        inputValue={
          "transformMatrix" in activeObject
            ? activeObject.transformMatrix
              ? activeObject.transformMatrix[0]
              : activeObject.calcTransformMatrix()[0]
            : 0
        }
      />
      <EditorInput
        onChange={changeObjectAngles}
        name="2"
        step={0.02}
        title="Angel C"
        inputValue={
          "transformMatrix" in activeObject
            ? activeObject.transformMatrix
              ? activeObject.transformMatrix[2]
              : activeObject.calcTransformMatrix()[2]
            : 0
        }
      />
      <EditorInput
        onChange={changeObjectAngles}
        name="4"
        step={0.02}
        title="Angel TX"
        inputValue={
          "transformMatrix" in activeObject
            ? activeObject.transformMatrix
              ? activeObject.transformMatrix[4]
              : activeObject.calcTransformMatrix()[4]
            : 0
        }
      />
      <EditorInput
        onChange={changeLayoutZIndex}
        name="top"
        title="Layout Level"
        inputValue={"zIndex" in activeObject ? activeObject.zIndex : 0}
      />
      <div className="color-picker">
        <span className="title">Content Color</span>
        <span
          className="color-content"
          onClick={() => openColorPicker("fill")}
          style={{
            backgroundColor: activeObject.fill
              ? activeObject.fill
              : "#FFFFFF"
          }}
        ></span>
        {fillPicker ? (
          <SketchPicker
            color={activeObject.fill ? activeObject.fill : "#FFFFFF"}
            onChange={(color: any) => changeColor(color, "fill")}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
