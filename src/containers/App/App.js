import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import InstumentsPage from '../../layouts/InstumentsPage';
import FavoritesPage from '../../layouts/FavoritesPage';
import SideBar from '../SideBar';

const App = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div style={{ display: 'flex' }}>
    <Router>
      <SideBar />
      <Switch>
        <Route exact path="/instruments">
          <InstumentsPage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Router>
  </div>
);


export default App;
