import React from 'react';

import classes from './Header.module.css';

const Header = (props) => (
    <div className={classes.Header}>
        <div></div>
        <h1>{props.children}</h1>
        <div></div>
    </div>
    
);

export default Header;