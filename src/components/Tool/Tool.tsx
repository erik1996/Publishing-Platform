import * as React from 'react';
import './Tool.scss';

export type ToolProps = {
  children?: any
  onClick?: () => void,
  iconName?: string,
};

const Tool: React.FC<ToolProps>  = ({ ...props }) => {
  const [dropdown, setDropdown] = React.useState(false);

  const { children, onClick, iconName } = props;

  const openDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
    <div className="Tool" onClick={onClick ? onClick : () => openDropdown()}>
      {iconName ? <img src={`${iconName}.png`} alt={iconName} /> : 'T'}
      {dropdown && children ?

        <div className="child-container">
          {children.map(function (child: any) {
            return child;
          })}
        </div>

        :

        null

      }
    </div>
  );
};

export { Tool }
