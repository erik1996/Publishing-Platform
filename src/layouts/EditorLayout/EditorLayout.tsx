import * as React from 'react';

import { ActiveObject } from '../../ContextAPI/ActiveObject';
import EditorHeaderContainer from './editor-header-container';
import DropdownMenu from '../../components/DropdownMenu'
import './EditorLayout.scss';

export type EditorLayoutProps = {
  children?: React.ReactElement | React.ReactElement[],
};

const options = [
  {
    name: 'option1',
    title: 'Option 1',
  },
  {
    name: 'option2',
    title: 'Option 2',
  },
  {
    name: 'option3',
    title: 'Option 3',
  }
];

export const EditorLayout: React.FC<EditorLayoutProps> = ({ children }) => {
  return (
    <ActiveObject>
      <div className="editor-layout">
        <EditorHeaderContainer>
          <DropdownMenu defaultTitle="Menu 1" options={options} />
          <DropdownMenu defaultTitle="Menu 2" options={options} />
          <DropdownMenu defaultTitle="Menu 3" options={options} />
        </EditorHeaderContainer>
        <div className="editor-layout-content">
          {children}
        </div>
      </div>
    </ActiveObject>
  );
};


