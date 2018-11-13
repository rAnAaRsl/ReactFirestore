import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AppNavBar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'
import store from './store'
import {Provider} from 'react-redux';
import AddClients from './components/clients/AddClients'
import ClientDetails from './components/clients/ClientDetails'
import EditClient from './components/clients/EditClient'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Settings from './components/settings/Settings';
import {UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <AppNavBar/>
                        <div className="container">
                            <Switch>
                                <Route path={"/"} component={UserIsAuthenticated(Dashboard)} exact/>
                                <Route path={"/login"} component={UserIsNotAuthenticated(Login)} exact/>
                                <Route path={"/register"} component={UserIsNotAuthenticated(Register)} exact/>
                                <Route path={"/client/add"} component={UserIsAuthenticated(AddClients)} exact/>
                                <Route path={"/client/:id"} component={UserIsAuthenticated(ClientDetails)} exact/>
                                <Route path={"/client/edit/:id"} component={UserIsAuthenticated(EditClient)} exact/>
                                <Route path={"/settings"} component={UserIsAuthenticated(Settings)} exact/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>

        );
    }
}

export default App;
