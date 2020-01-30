import * as React from 'react';
import './Footer.scss';

export type FooterProps = {
  children?: React.ReactNode | React.ReactElement | React.ReactElement[],
};

export const Footer: React.FC<FooterProps> = ({children}) => {
  return (
    <div className="Footer">
      {children}
    </div>
  );
};
