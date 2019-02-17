import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login.component';
import DashBoardComponent from './components/dashboard.component';

const AppRoutes =( <Switch>
        <Route exact path="/" component={Login} />,
        <Route exact path="/dashboard" component={DashBoardComponent} />
    </Switch>)

export default AppRoutes;