import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducers from './reducers';

import Home from './components/home';
import Dishes from './components/dishes';
import Plate from './components/plate';
import Info from './components/info';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <MuiThemeProvider>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/info" component={Info}/>
            <Route path="/dishes/:data/:id/:type" component={Plate}/>
            <Route path="/dishes/:data/:id" component={Dishes}/>
            <Route path="/dishes" component={Home}/>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>
  , document.querySelector('.container'));
