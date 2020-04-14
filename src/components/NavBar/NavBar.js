import React from 'react';
import './NavBar.scss';
import Timer from './Timer/Timer';

const navBar = () => (
    <div className="nav-bar">
        <div>
            Todo List
        </div>
        <div>
            <Timer/>
        </div>
    </div>

)

export default navBar;