import * as React from 'react';
import classnames from 'classnames';
import Option from './option';
import { useOutsideAlerter } from '../../helpers/useClickOutside';
import './DropdownMenu.scss';

type TOption = {
  name: string,
  title: string,
  isSelected?: boolean,
};

export type DropdownMenuProps = {
  defaultTitle?: string,
  options?: TOption[],
};

export const DropdownMenu = ({defaultTitle, options}:DropdownMenuProps) => {
  const [active, setActive] = React.useState<TOption | undefined>();
  const [isOpened, setIsOpened] = React.useState<boolean>(false);
  const wrapperRef = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const isClickedOutside = useOutsideAlerter([wrapperRef, dropdownRef]);

  const openDropdown = () => setIsOpened(true);
  const closeDropdown = () => setIsOpened(false);

  const handleClick = (name:string) => {
    if (name !== active?.name) {
      const newActive = options?.find(option => option.name === name);
      setActive(newActive);
    }
  }

  React.useEffect(() => {
    if (isClickedOutside && isOpened) {
      closeDropdown();
    }
  },[isClickedOutside, isOpened]);

  React.useEffect(() => {
    if (options) {
      if (options.length) {
        setActive(options[0]);
      }
    }
  },[options])

  return (
    <div className={classnames({
      'dropdown-menu': true,
      'dropdown-menu--opened': isOpened,
    })}>
      <span
        className="dropdown-menu__title"
        onClick={isOpened ? closeDropdown : openDropdown}
        ref={wrapperRef}
      >
        {defaultTitle ? defaultTitle : (active ? active.title : '')}
      </span>
      <div
        className="dropdown-menu__options"
        ref={dropdownRef}
      >
        {options && (
          options.map((option, index) => 
            <Option
              key={index}
              name={option.name}
              title={option.title}
              isSelected={active && active.name === option.name}
              onClick={handleClick}
            />
          )
        )}
      </div>
    </div>
  );
};
