import React, { Component } from 'react';
import NewTask from './NewTask/NewTask';
import ListTasks from './ListTasks/ListTasks';

class Tasks extends Component {
    constructor() {
        console.log("Constructor Task");

        super();

        this.state = {
            tasks: []
        }
    }

    addItem = (item) => {
        item.id = (new Date()).getTime();
        let tasks = [...this.state.tasks, item];

        this.setState({
            tasks
        });
    }

    deleteItem = (idTask) => {
        let tasks = this.state.tasks.filter(item => 
            item.id !== idTask
        );

        this.setState({
            tasks
        })
    }

    render(){
        console.log("Render Task");

        return(
            <div className="tasks">
                <NewTask addItem = {this.addItem}/>
                <ListTasks items = {this.state.tasks} deleteItem = {this.deleteItem}/>
            </div>
        )
    }
}

export default Tasks;