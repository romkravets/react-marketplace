import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import {Header} from './Header';
import {HomePage} from "./HomePage";

import {routes} from './routes';
import {AboutPage} from "./AboutPage";
import {LoginPage} from "./LoginPage";
import {ProductsPage} from "./ProductsPage";

const isLoggedIn = false;

const  App = () => {
  return (
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path={routes.HOME} component={()=> isLoggedIn ? <HomePage/> : <Redirect to={routes.NOT_FOUND}/>}/>
            <Route path={routes.PRODUCTS} component={ProductsPage}/>
            <Route path={routes.ABOUT} component={AboutPage}/>
            <Route path={routes.LOGIN} component={LoginPage}/>
            <Route path={routes.NOT_FOUND} render={() => <div>Not Found</div>}/>
        </Switch>
      </div>
  );
}

export default App;
