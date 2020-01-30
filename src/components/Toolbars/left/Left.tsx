import * as React from 'react';
import './Left.scss';

export type LeftProps = {
  children?: React.ReactElement | React.ReactElement[],
};

export const Left: React.FC<LeftProps> = ({children}) => {
  return (
    <div className="Left">
      {children}
    </div>
  );
};
