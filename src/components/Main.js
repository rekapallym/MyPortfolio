import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './LandingPage';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';
import AboutMe from './AboutMe';


const Main = () => {
    return(
        <Switch>
            <Route exact path = "/" component = {LandingPage} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/resume" component = {Resume} />
            <Route path = "/projects" component = {Projects} />
            <Route path = "/aboutme" component = {AboutMe} />

    </Switch>

    )
}

export default Main;