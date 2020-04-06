import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';

import RoomsServiceContext from './components/rooms-service-context';

import RoomsService from './services/rooms-service';

import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

const roomService = new RoomsService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <RoomsServiceContext.Provider value={roomService}>
          <Router>
            <App />
          </Router>
        </RoomsServiceContext.Provider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);