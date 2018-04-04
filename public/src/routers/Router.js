import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import OurTeam from '../components/OurTeam';
import Portfolio from '../components/Portfolio';
import News from '../components/News';
import Careers from '../components/Careers';

const Routers = () => (
    <BrowserRouter>
        <div className="height100">
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/aboutus" component={AboutPage} />
                <Route path="/our-team" component={OurTeam} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/news" component={News} />
                <Route path="/careers" component={Careers} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routers;
