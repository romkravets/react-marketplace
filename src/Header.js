import React from 'react';
import { Link } from 'react-router-dom';

import {routes} from './routes';


export const  Header = () => (
    <ul>
        <li>
            <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
            <Link to={routes.PRODUCTS}>Products</Link>
        </li>
        <li>
            <Link to={routes.ABOUT}>About</Link>
        </li>
    </ul>
 )