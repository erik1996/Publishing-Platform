import * as React from 'react';
import classnames from 'classnames';
import './Option.scss';

export type OptionProps = {
  name: string,
  title: string,
  isSelected?: boolean,
  onClick: (name:string) => void,
};

export const Option: React.FC<OptionProps> = ({name, title, isSelected, onClick}) => {
  const handleClick = () => onClick(name);

  return (
    <div
      className={classnames({
        'menu-dropdown-option': true,
        'menu-dropdown-option--selected': isSelected,
      })}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
