import React from 'react';
import {useLocation} from 'react-router-dom';

export const HomePage = () => {
    const location = useLocation();
    return (
        <div>{console.log(location)}Welcome to Home page</div>
    )
}