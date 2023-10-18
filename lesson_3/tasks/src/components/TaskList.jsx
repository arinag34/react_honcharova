import React from "react";

const TaskList = React.memo(({ tasks, onDeleteTask }) => {
    console.log('Rendering TaskList');
    return (
        <div>
            <h2>Список завдань</h2>
            {tasks.map((task, index) => (
                <Task key={index} task={task} onDelete={() => onDeleteTask(index)} />
            ))}
        </div>
    );
});

const Task = React.memo(({ task, onDelete }) => {
    console.log(`Rendering Task: ${task.title}`);
    return (
        <div>
            <span>{task.title}</span>
            <button onClick={onDelete}>Видалити</button>
        </div>
    );
});

export default TaskList;


