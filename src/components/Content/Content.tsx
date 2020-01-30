import * as React from 'react';
import './Content.scss';

export type ContentProps = {
  children?: React.ReactNode |React.ReactElement | React.ReactElement[],
  forwardRef?: any,
};

export const Content: React.FC<ContentProps> = ({children, forwardRef}) => {
  return (
    <div className="Content" ref={forwardRef}>
      {children}
    </div>
  );
};
