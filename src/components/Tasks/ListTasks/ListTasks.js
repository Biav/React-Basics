import React from 'react';
import './ListTasks.scss';

const listTasks = ({items, deleteItem}) => {
    let listItems = items.length > 0 ? 
                    items.map( item => {
                        return (
                        <div key={item.id}>
                            <div>{item.task}</div>
                            <button onClick={() => deleteItem(item.id)}>X</button>
                        </div>)
                    }): <h1>No Items</h1>;

    return(
        <div className="list-tasks">
            { listItems }
        </div>
    );
};

export default listTasks;