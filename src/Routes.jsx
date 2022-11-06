import React from 'react';

import home from './components/home/home';

import contact from './components/contact/contact';
import help from './components/help';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import sidebar from './components/sidebar'
import profile from './components/side_con/profile';
import settings from './components/side_con/settings';

import { Route } from 'react-router-dom';

const Routes= ()=>{
    return(
        <switch>
            <Route path="/" exact component={home} />
            <Route path="/sidebar" exact component={sidebar} />
            <Route path="/contact" exact component={contact} />
            {/* <Route path="/DEPT/Garbage" exact component={Garbage} /> */}
            {/* <Route path="/DEPT/construct"exact component={construct} /> */}
            {/* <Route path="/DEPT/KWA" exact component={KWA} /> */}
            <Route path="/help" exact component={help} />
            <Route path="/Login" exact component={Login} />
            <Route path="/Signup" exact component={Signup} />
            <Route path="/profile" exact component={profile} />
            <Route path="/settings" exact component={settings} />
        </switch>
    );
}

export default Routes