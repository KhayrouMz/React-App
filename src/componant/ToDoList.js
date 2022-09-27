import React from "react";
import ToDo from "./ToDo";




function ToDoList ({tasks, match, onToggleCompleted}) {
    let filtredTasks ;

    switch (match.params.filter) {
        case 'completed':
            filtredTasks = tasks.filter(task => task.completed)
            break;
        default:
            filtredTasks = tasks
            break;
    }

    if (filtredTasks.length === 0) {
        return (
            <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                <li className="list-group-item d-flex align-tiems-center justify-content-between">
                    Aucune tache à afficher
                </li>
            </ul>
            </>
        );
    }else {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {
                        filtredTasks.map((task) => <ToDo key = {task.id} task={task} onToggleCompleted={onToggleCompleted}/>)
                    }
                </ul>
            </>
        );
    }
}


export default ToDoList