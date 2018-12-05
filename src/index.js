//React
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//CSS
import './styles/styles.scss';
//3rd party libs
import 'babel-polyfill';
//Compnents
import Root from './store';
import App from './components/App';

ReactDOM.render(
  <Root>
    <App/>
  </Root>, 
  document.getElementById('app')
);
