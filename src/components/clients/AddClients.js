import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {Link} from 'react-router-dom';

class AddClients extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: '',
    }
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();


        const newClient = this.state;

        if(newClient.balance === '')
        {
            newClient.balance = 0
        }
        const {firestore} = this.props;

        firestore.add({collection: 'clients'}, newClient).then(()=>{
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <div>
                <div className={"row"}>
                    <div className={"col-md-6"}>
                        <Link to={"/"} className={"btn btn-Link"}>
                            <i className="fas fa-arrow-circle-left"/> Back To Dashboard
                        </Link>
                    </div>
                </div>
                <div className={"card"}>
                    <div className="card-header">
                        Add Client
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className={"form-group"}>
                                <label htmlFor={"firstName"}>First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={"First Name"}
                                    name={"firstName"}
                                    minLength={2}
                                    required
                                    onChange={this.onChange}
                                    value={this.state.firstName}
                                />

                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"lastName"}>Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={"Last Name"}
                                    name={"lastName"}
                                    minLength={2}
                                    required
                                    onChange={this.onChange}
                                    value={this.state.lastName}
                                />

                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"email"}>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder={"Email"}
                                    name={"email"}
                                    minLength={2}
                                    onChange={this.onChange}
                                    value={this.state.email}
                                />

                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"phone"}>Phone</label>
                                <input
                                    type="phone"
                                    className="form-control"
                                    placeholder={"Phone"}
                                    name={"phone"}
                                    minLength={10}
                                    onChange={this.onChange}
                                    value={this.state.phone}
                                />

                            </div>
                            <div className={"form-group"}>
                                <label htmlFor={"balance"}>Balance</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={"Balance"}
                                    name={"balance"}
                                    onChange={this.onChange}
                                    value={this.state.balance}
                                />

                            </div>
                            <input type="submit" value="Submit" className={"btn btn-primary btn-block"}/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

AddClients.propTypes = {
    firestore:PropTypes.object.isRequired
};

export default firestoreConnect()(AddClients);
