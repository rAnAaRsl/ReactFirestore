import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from 'prop-types';

class Clients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            clients: []
        }
    }

    render() {
        const {clients} = this.props;
        if (this.state.isLoading) {
            return (
                <h1>Loading</h1>
            )
        }
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h2>{''}<i className="fas fa-users"></i>Clients{''}</h2>
                    </div>

                    <div className="col-md-6">

                    </div>
                </div>
                <table className="table table-striped">
                    <thead className="thead-inverse">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {clients && clients.map((client) => {
                        return (
                            <tr key={client.id}>
                                <td>
                                    {client.firstName} {client.lastName}
                                </td>
                                <td>
                                    {client.email}
                                </td>
                                <td>
                                    ${parseFloat(client.balance).toFixed(2)}
                                </td>
                                <td>
                                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                                        <i className="fas fa-arrow-circle-right">

                                        </i>
                                        Details
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

Clients.proptypes={
    firestore:PropTypes.object.isRequired,
    clients:PropTypes.array
}

export default compose(
    firestoreConnect([{collection: 'clients'}]),
    connect((state, props) => ({
        clients: state.firestore.ordered.clients
    }))
)(Clients);
