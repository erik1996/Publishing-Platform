import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import { NotFound } from './routes/NotFound';
 
export default () => {
  return (
    <Switch>
      <Route path="/not-found">
        <NotFound />
      </Route>
    </Switch>
  );
}
