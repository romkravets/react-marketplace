import React, {Fragment} from 'react';
import { useHistory } from 'react-router-dom';

import {routes} from './routes';

export const LoginPage = () => {
    const history = useHistory();

    const onClick = () => history.push(routes.HOME);
    return (
        <Fragment>
            <div>Login Page</div>
            <button onClick={onClick}>Go Home</button>
        </Fragment>

    )
}