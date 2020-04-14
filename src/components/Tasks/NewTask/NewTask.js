import React, { Component } from 'react';
import './NewTask.scss';

class NewTask extends Component {
    constructor() {
        console.log("Constructor New Task");

        super();

        this.state = {
            id: null, 
            task: ''
        }
    }

    addTask = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({
            task: ''
        });
    }

    handleChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        })
    }

    render(){
        console.log("Render New Task");

        return(
            <div className="new-task">
                <form onSubmit={this.addTask}>
                    <input type="text" name="newTask" onChange={(e) => this.handleChange('task', e)} value={this.state.task}/>
                    <button type="submit" value="Add"> 
                        Add 
                    </button>
                </form>
            </div>
        )
    }
}

export default NewTask;