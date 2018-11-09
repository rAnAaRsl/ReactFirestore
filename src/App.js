import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AppNavBar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'
import store from './store'
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <Router>
                <div className="App">
                    <AppNavBar/>
                    <div className="container">
                        <Switch>
                            <Route to={"/"} component={Dashboard}/>
                        </Switch>
                    </div>
                </div>
            </Router>
            </Provider>

        );
    }
}

export default App;
