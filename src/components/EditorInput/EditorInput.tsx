import * as React from 'react';


export type EditorInputProps = {
  inputValue?: number,
  leftIcon: string,
  rightIcon?: Array<string>
};

export const EditorInput: React.FC<EditorInputProps> = ({ inputValue, leftIcon, rightIcon }) => {
  return (
    <div className="editor-input">
      <img src={`${leftIcon}.png`} alt="" />
      <input type="number" value={inputValue} />
      {rightIcon ?
        rightIcon.map((iconName, i) => { 
          return  < img key={i} src={`${iconName}.png`} alt={iconName}/>
        })
      : null
    }

    </div>

  );
};
