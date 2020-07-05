import React from 'react';
import { Switch, Route} from 'react-router-dom';

import {Header} from './Header';
import {HomePage} from "./HomePage";

import {routes} from './routes';
import {AboutPage} from "./AboutPage";
import {LoginPage} from "./LoginPage";

const  App = () => {
  return (
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path={routes.HOME} component={HomePage}/>
            <Route path={routes.PRODUCTS} render={() => <div>Products</div>}/>
            <Route path={routes.ABOUT} component={AboutPage}/>
            <Route path={routes.LOGIN} component={LoginPage}/>
            <Route path={routes.NOT_FOUND} render={() => <div>Not Found</div>}/>
        </Switch>
      </div>
  );
}

export default App;
