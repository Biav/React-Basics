import React, { Component } from 'react';
import componentColor from '../../../hoc/ComponentColor';
import './../../style.scss';

class Timer extends Component {
    constructor() {
        super();

        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
         this.timer = setInterval(()=> {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render(){
        return(
            <>
                <span className={this.props.color}>
                    {this.state.date.toLocaleTimeString()} 
                </span>
            </>
        )
    }
}

export default componentColor(Timer);