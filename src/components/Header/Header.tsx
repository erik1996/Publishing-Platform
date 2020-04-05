import * as React from 'react';
import './Header.scss';

export type HeaderProps = {
  children?: React.ReactNode | React.ReactElement | React.ReactElement[],
};

export const Header: React.FC<HeaderProps> = ({ children}) => {
  return (
    <div className="Header">
      <span className="header-title">Title</span>
    </div>
  );
};
