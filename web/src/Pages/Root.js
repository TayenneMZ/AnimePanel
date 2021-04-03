import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import PagesPanelSearch from './Panel/Search/Search';
import PagesPanelForm from './Panel/Form/Form';

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/create" component={PagesPanelForm} />
                <Route path="/edit/:id" component={PagesPanelForm} />
                <Route path="/" component={PagesPanelSearch} />
            </Switch>
        </Router>
    );
}

export default Root;