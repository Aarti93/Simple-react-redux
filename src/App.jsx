import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Home from './containers/HomepageContent';
import About from './containers/About';

import reactLogo from './assets/React-icon.png';

const App = () => (
   <Home />
);

export default App;