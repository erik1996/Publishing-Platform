import * as React from 'react';
import './Right.scss';

export type RightProps = {
  children?: React.ReactElement | React.ReactElement[],
};

export const Right: React.FC<RightProps> = ({children}) => {
  return (
    <div className="Right">
      {children}
    </div>
  );
};
