import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import { Interface } from './routes/Interface';

export default () => {
  return (
    <Switch>
      <Route path="/">
        <Interface />
      </Route>
    </Switch>
  );
}
