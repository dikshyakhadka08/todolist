import React from 'react';

//Represents individual task in our TODO list
function TodoItem(
{
    task,deleteTask,toggleCompleted
}){
    function handleChange(){
        toggleCompleted(task.id);
    }
    return (
        <div className ="todo-item">
            <input type ="checkbox"
            checked ={task.completed}
            onChange={handleChange} />
            <p>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>
                
            </button>
        </div>
    )

}