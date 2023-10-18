import React, { useRef, useState } from 'react';

const TaskInput = ({ onAddTask }) => {
    const taskInputRef = useRef(null);
    const [error, setError] = useState('');

    const handleAddTask = () => {
        const inputValue = taskInputRef.current.value.trim();
        if (inputValue.length < 3) {
            setError('Min: 3');
            return;
        }

        onAddTask(inputValue);
        taskInputRef.current.value = '';
        setError('');
    };

    return (
        <div>
            <input type="text" ref={taskInputRef} placeholder="Add new task" />
            <button onClick={handleAddTask}>Додати</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default TaskInput;
