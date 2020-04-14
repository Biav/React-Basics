import React, { Component } from 'react';

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
                {this.state.date.toLocaleTimeString()}
            </>
        )
    }
}

export default Timer;