import * as React from 'react';

const ActiveObjectContext = React.createContext(0);


class ActiveObject extends React.Component {
  render() {
    return (
      <ActiveObjectContext.Provider value={1}>
      </ActiveObjectContext.Provider>
    );
  }
};

export {ActiveObjectContext, ActiveObject}