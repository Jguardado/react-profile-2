import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing';
export default function RouterPage() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route path="/albums">
            <AlbumsPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function AlbumsPage() {
  return <h2>AlbumsPage</h2>;
}

function UsersPage() {
  return <h2>UsersPage</h2>;
}
