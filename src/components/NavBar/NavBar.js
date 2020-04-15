import React from 'react';
import './NavBar.scss';
import Timer from './Timer/Timer';
import './../style.scss';
import componentColor from './../../hoc/ComponentColor';

const navBar = (props) => (
    <div className="nav-bar">
        <div className={props.color}>
            Todo List
        </div>
        <div>
            <Timer/>
        </div>
    </div>

)

export default componentColor(navBar);