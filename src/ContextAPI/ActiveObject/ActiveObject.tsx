import * as React from 'react';

const ActiveObjectContext = React.createContext({});


class ActiveObject extends React.Component {
    state = {
      activeObject: {
        active: true
      }
  }
  updateActiveObject = (activeObject: any) => {
    this.setState({activeObject});
  }
  render() {
    return (
      <ActiveObjectContext.Provider value={{
        activeObject: this.state.activeObject,
        updateActiveObject: (e: any) => this.updateActiveObject(e)
      }}>
      </ActiveObjectContext.Provider>
    );
  }
};

export {ActiveObjectContext, ActiveObject}