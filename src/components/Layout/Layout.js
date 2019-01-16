import React from 'react';

import Aux from '../../hoc/Auxiliary';
import Header from '../UI/Header/Header';
import classes from './Layout.module.css';

const Layout = (props) => (
    <Aux>
        <Header>Weather App</Header>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;