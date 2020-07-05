import React, {Fragment} from 'react';
import {useLocation} from 'react-router-dom';

export const AboutPage = () => {
    const { search } = useLocation();
    const name = 'name';
    const value = new URLSearchParams(search).get(name);
    return (
        <Fragment>
            <div>About page</div>
            <div>The query stying name id {name} and value is {value}</div>
        </Fragment>
    )
}