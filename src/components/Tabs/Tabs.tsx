import * as React from 'react';
import Tab from './tab';
import './Tabs.scss';

export type TabsProps = {
  children: React.ReactElement | React.ReactElement[],
};

export const Tabs = ({children}: TabsProps) => {
  const [active, setActive] = React.useState(0);
  const childrenArray = children instanceof Array ? children : [children];
  const tabData = React.useCallback(() => childrenArray.map((child) => {
    const { props } = child;
    return props.tab;
  }), [childrenArray])();

  const handleClick = (e:React.MouseEvent) => {
    const tab = e.target as HTMLDivElement;
    const key = tab.getAttribute('data-index');
    setActive(Number(key));
  }

  return (
    <div className="Tabs">
      <div className="tab-panel">
        {tabData.map((tabData, index) => (
          <div
            key={index}
            data-index={index}
            onClick={handleClick}
          >
            {tabData}
          </div>
        ))}
      </div>
      {childrenArray[active]}
    </div>
  );
};

Tabs.Tab = Tab;
