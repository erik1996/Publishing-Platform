import * as React from 'react';
import './Tab.scss';

export type TabProps = {
  children?: React.ReactElement | React.ReactElement[],
  tab: string,
};

export const Tab: React.FC<TabProps> = ({children}) => {
  return (
    <div className="Tab">
      {children}
    </div>
  );
};
