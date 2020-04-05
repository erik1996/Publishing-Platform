import * as React from 'react';

import "./EditorInput.scss";


export type EditorInputProps = {
  inputValue: number,
  name: string,
  onChange:  (e: any) => void,
  title: string,
  step?: number,
  maxValue?: number,
  rightIcon?: Array<string>
};

export const EditorInput: React.FC<EditorInputProps> = ({ inputValue, name, onChange, title, step, maxValue, rightIcon }) => {

  return (
    <div className="editor-input">
      <span className="editor-title">{title}</span>
      <input type="number" name={name} step={step? step : 1} max={maxValue} value={inputValue} onChange={(e) => onChange(e)}/>
      {rightIcon ?
        rightIcon.map((iconName, i) => { 
          return  < img key={i} src={`${iconName}.png`} alt={iconName}/>
        })
      : null
    }

    </div>

  );
};
