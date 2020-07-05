import React, {Fragment} from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

import {routes} from './routes';

export const ProductsPage = () => {
    const { path } = useRouteMatch(routes.PRODUCTS);
    console.log(path);
    const newPath = `${path}/new`;
    const oldPath = `${path}/old`;

    return (
        <Fragment>
            <div>Products</div>
            <ul>
                <li>
                    <Link to={newPath}>NEW</Link>
                </li>
                <li>
                    <Link to={oldPath}>OLD</Link>
                </li>
            </ul>
            <Switch>
                <Route path={oldPath} render={() => <div>OLD</div>}/>
                <Route path={newPath} render={() => <div>NEW</div>}/>
            </Switch>
        </Fragment>

    )
}