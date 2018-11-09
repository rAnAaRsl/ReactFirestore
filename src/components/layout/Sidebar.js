import React, {Component} from 'react';
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <Link to={"/client/add"} className="btn btn-block btn-success">
            <i className="fas fa-plus"></i> New Client
        </Link>
    )
}
export default Sidebar;