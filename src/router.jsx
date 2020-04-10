import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './components/landing';
import UsersPage from './components/UsersPage';
import UserPage from './components/UserPage';
export default function RouterPage() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/users/:userId">
            <UserPage />
          </Route>
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
