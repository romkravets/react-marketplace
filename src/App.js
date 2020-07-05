import React from 'react';
import { Switch, Route} from 'react-router-dom';

import {Header} from './Header';

import {routes} from './routes';

const  App = () => {
  return (
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path={routes.HOME} render={() => <div>Home Page</div>}/>
            <Route path={routes.PRODUCTS} render={() => <div>Products</div>}/>
            <Route path={routes.ABOUT} render={() => <div>About</div>}/>
        </Switch>
      </div>
  );
}

export default App;
