import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Reset } from 'styled-reset';
import store from '../src/tools/store';
import App from './tools/App';

ReactDOM.render(
  <Provider store={store}>
    <Reset />
    <App />
  </Provider>,
  document.getElementById('root')
);