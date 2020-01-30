import * as React from 'react';
import './EditorHeaderContainer.scss';

export type EditorHeaderContainerProps = {
  children?: React.ReactElement | React.ReactElement[],
};

export const EditorHeaderContainer: React.FC<EditorHeaderContainerProps> = ({children}) => {
  return (
    <div className="editor-header-container">
      <div className="editor-header-container__logo">
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
      </div>
      {children}
    </div>
  );
};
