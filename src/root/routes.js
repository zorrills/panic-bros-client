import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import appHistory from '../util/history';
import Home from '../Components/Home/Home';
import Episodes from '../Components/Episodes/Episodes';
import NotFound from '../Components/Error/NotFound';
import { ConnectedRouter } from 'connected-react-router';
import DocumentTitle from 'react-document-title';
import { PropTypes } from 'prop-types';


export const routes = [
    {
        name:"home", path:"/", component:Home
    },
    {
        name:"episodes", path:"/episodes", component: Episodes
    }
];


const Routes = ({ children, component, history = appHistory }) => {
    const Component = component;
    return (
        <ConnectedRouter history={history}>
            <DocumentTitle title={'Panic Bros Podcast'}>
                <Component children={children}>
                <Switch>
                    {routes.map(route => <Route key={route.path} path={route.path} exact component={route.component}/> )}
                    <Route path="*" exact component={NotFound} />
                </Switch>
            </Component>
            </DocumentTitle>
        </ConnectedRouter>
    );
};

Routes.defaultProps = {
    history: appHistory,
};

Routes.propTypes = {
    component: PropTypes.func.isRequired,
    history: PropTypes.objectOf,
};

export default Routes;
