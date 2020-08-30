import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Home from "../pages/home";
import Skills from "../pages/skills";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Work from "../pages/work";

import Logo from "../componets/Logo.component";
import GridBackground from "../componets/GridBackground.component";
import MainMenuDrawer from "../componets/MainMenuDrawer.component";

import ScrollToTop from "../componets/Scrolltotop.component";

import "./styles.scss";

const history = createHistory();

interface CustomRoute {
    Path: string;
    Name: string;
    Component?: React.FC;
}

const routes: CustomRoute[] = [
    { Path: '/', Name: 'Home', Component: Home },
    { Path: '/skills', Name: 'Skills', Component: Skills },
    { Path: '/experience', Name: 'Experience', Component: Experience },
    { Path: '/education', Name: 'Education', Component: Education },
    { Path: '/work', Name: 'Work', Component: Work },
]

const App: React.FC = () => {

    return (
        <React.Fragment>
            <Logo />
            <GridBackground />
            <Router history={history}>
                <MainMenuDrawer routes={routes} />
                <ScrollToTop />
                <Route
                    render={({ location }) => (
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                mountOnEnter={true}
                                unmountOnExit={true}
                                timeout={300}
                                classNames="content-wrapper"
                            >
                                <Switch location={location}>
                                    {routes.map(({ Path, Component }) => (
                                        <Route key={Path} exact path={Path} component={Component} />
                                    ))}
                                    <Redirect to="/" />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    )}>
                </Route>
            </Router>
        </React.Fragment>
    )
}

export default App;
