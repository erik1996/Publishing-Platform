import React, { useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EditorRoutes } from './routes/Editor';
import { NotFoundRoutes } from './routes/NotFound';

const App: React.SFC = () => {
  return useMemo(() => (
    <div className="root">
      <Switch>
        <Route exact path="/">
          <EditorRoutes />
        </Route>
        <Route exact path="/not-found">
          <NotFoundRoutes />
        </Route>
        <Redirect to="/not-found"/>
      </Switch>
    </div>
  ), []);
}

export default App;
