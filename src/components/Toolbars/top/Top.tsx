import * as React from 'react';

import { ActiveObjectContext } from '../../../ContextAPI/ActiveObject';
import EditorInput from '../../EditorInput';
import './Top.scss';

export type TopProps = {
  children?: React.ReactElement | React.ReactElement[],
};

export const Top: React.FC<TopProps> = ({ children }) => {
  return (
    <div className="Top">
      <div className="top-row">
        {/* <ActiveObjectContext.Consumer>
             {context => (
              <p>{context}</p>
          )}

        </ActiveObjectContext.Consumer> */}
        <EditorInput leftIcon="x" />
        <EditorInput leftIcon="selection" />
        <EditorInput leftIcon="selection" />
        <EditorInput leftIcon="selection" />
        <EditorInput leftIcon="selection" />
      </div>
      <div className="top-row">
        <EditorInput leftIcon="selection" />
        <EditorInput leftIcon="selection" />
        <EditorInput leftIcon="selection" />
        <EditorInput leftIcon="selection" />
        <EditorInput leftIcon="selection" />
      </div>
    </div>
  );
};
