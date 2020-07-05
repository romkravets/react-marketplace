import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {routes} from './routes';


const modifiedAboutRouter = `${routes.ABOUT}?name=testAboutName`;


export const  Header = () => {
    //const location = useLocation();
    //console.log(location);
    const {pathname} = useLocation();
    return (
       pathname === routes.LOGIN ? null : (
           <ul>
               <li>
                   <Link to={routes.HOME}>Home</Link>
               </li>
               <li>
                   <Link to={routes.PRODUCTS}>Products</Link>
               </li>
               <li>
                   <Link to={modifiedAboutRouter}>About</Link>
               </li>
           </ul>
       )
    )
}