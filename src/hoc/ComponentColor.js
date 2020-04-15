import React, { Component } from 'react';

const componentColor = (WrappedComponent) => {
    let colors = ['blue', 'green', 'dark', 'purple', 'gray'],
        newClass = colors[parseInt(Math.random() * 4)];

    return class extends Component {

        render(){
            return <WrappedComponent color={newClass}/>
        }
    }
}

export default componentColor;