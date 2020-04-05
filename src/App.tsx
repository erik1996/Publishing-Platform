import React, { useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { EditorRoutes } from './routes/Editor';
import { AuthenticationRoute } from './routes/Authentication';
import { BookListRoute, EditBookRoute } from './routes/Book';
import { NotFoundRoutes } from './routes/NotFound';

const App: React.SFC = () => {
  return useMemo(() => (
    <Switch>
      <Route exact path="/editor">
        <EditorRoutes />
      </Route>
      <Route exact path="/user/authentication">
        <AuthenticationRoute />
      </Route>
      <Route exact path="/books">
        <BookListRoute />
      </Route>
      <Route exact path="/edit/book/:id">
        <EditBookRoute />
      </Route>
      <Route exact path="/not-found">
        <NotFoundRoutes />
      </Route>
      <Redirect to="/not-found"/>
    </Switch>
  ), []);
}

export default App;
