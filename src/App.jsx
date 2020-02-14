import React from 'react';
import { Provider } from 'react-redux';
import LandingPage from './components/landing';
import store from './store';
import 'typeface-roboto';
import './App.css';

const App = () => (
  <Provider store={store}>
    <LandingPage />
  </Provider>
);

export default App;
