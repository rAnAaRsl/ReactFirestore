import React, {Component} from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
    return (
        <div>
            <img src={spinner} alt={"Loading..."} style={{width: '200px', margin: 'auto', display: 'block'}}></img>
        </div>
    )
}
export default Spinner;