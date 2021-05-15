import React from 'react';
import {BrowserRouter as Switch, Route} from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage.js';

const Router = () => {
    return (
        <Switch>
            <Route exact path = "/" component = {Homepage}/>
        </Switch>
    );
};

export default Router