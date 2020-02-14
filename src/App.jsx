import React from 'react';
import { Provider } from 'react-redux';
import RoutingPage from './router';
import store from './store';
import 'typeface-roboto';
import './App.css';

const App = () => (
  <Provider store={store}>
    <RoutingPage />
  </Provider>
);

export default App;
