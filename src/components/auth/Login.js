import React, {Component} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {notifyUser} from "../../action/notifyAction";
import Alert from '../layout/alert';
import {firebaseConnect} from 'react-redux-firebase';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit = (e) => {
        e.preventDefault();

        const {firebase, notifyUser} = this.props;

        const {email, password} = this.state;

        firebase.login({
            email,
            password
        }).catch(err => {
            notifyUser("Invalid Login credentials", 'error');
        })


    }

    render() {
        const {message,messageType} = this.props.notify;

        return (
            <div className={"row"}>
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            {message?(<Alert message={message} messageType={messageType}/>):null}
                            <h1 className={"text-center pb-4 pt-3"}>
                                <span className="text-primary">
                                     <i className={"fas fa-lock"}></i> {' '}
                                    Login
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className={"form-group"}>
                                    <label htmlFor={"email"}>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder={"Email Address"}
                                        name={"email"}
                                        minLength={2}
                                        required
                                        onChange={this.onChange}
                                        value={this.state.email}
                                    />

                                </div>
                                <div className={"form-group"}>
                                    <label htmlFor={"password"}>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder={"Password"}
                                        name={"password"}
                                        minLength={2}
                                        required
                                        onChange={this.onChange}
                                        value={this.state.password}
                                    />

                                </div>
                                <input type="submit" value="Login" className={"btn btn-primary btn-block"}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    firebaseConnect: PropTypes.object.isRequired
};

export default compose(firebaseConnect(), connect((state, props) => ({
    notify: state.notify,
}), {notifyUser}))(Login);
