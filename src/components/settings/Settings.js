import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {DISABLE_BALANCE_ON_ADD, DISABLE_BALANCE_ON_EDIT, ALLOW_REGISTERATION} from "../../action/type";
import {setAllowRegisteration, setDisableBalanceOnAdd, setDisableBalanceOnEdit} from "../../action/settingsAction";

class Settings extends Component {

    allowRegisterationChange = () => {

        const {setAllowRegisteration} = this.props;
        setAllowRegisteration();

    }

    disableBalanceOnAddChange = () => {
        const {setDisableBalanceOnAdd} = this.props;
        setDisableBalanceOnAdd();
    }

    disableBalanceOnEditChange = () => {
        const {setDisableBalanceOnEdit} = this.props;
        setDisableBalanceOnEdit()
    }

    render() {

        const {
            disableBalanceOnAdd,
            disableBalanceOnEdit,
            allowRegisteration
        } = this.props.settings;

        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to={"/"} className={"btn btn-Link"}>
                            <i className="fas fa-arrow-circle-left"/> Back To Dashboard
                        </Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        Edit Settings
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Allow Registration</label>{' '}
                                <input type="checkbox" name="allowRegisteration" checked={!!allowRegisteration}
                                       onChange={this.allowRegisterationChange}/>
                            </div>
                            <div className="form-group">
                                <label>Disable Balance on Add</label>{' '}
                                <input type="checkbox" name="disableBalanceOnAdd" checked={!!disableBalanceOnAdd}
                                       onChange={this.disableBalanceOnAddChange}/>
                            </div>
                            <div className="form-group">
                                <label>Disable Balance on Edit</label>{' '}
                                <input type="checkbox" name="disableBalanceOnEdit" checked={!!disableBalanceOnEdit}
                                       onChange={this.disableBalanceOnEditChange}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {
    settings: PropTypes.object.isRequired,
    setDisableBalanceOnEdit: PropTypes.func.isRequired,
    setDisableBalanceOnAdd: PropTypes.func.isRequired,
    setAllowRegisteration: PropTypes.func.isRequired
}

export default connect(
    (state, props) => ({
        auth: state.firebase.auth,
        settings: state.settings
    }),
    {setAllowRegisteration, setDisableBalanceOnAdd, setDisableBalanceOnEdit}
)(Settings);
