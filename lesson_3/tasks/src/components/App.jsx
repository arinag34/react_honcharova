import React, { useState, useCallback, useLayoutEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import useTheme from './useTheme';

function App() {
    const [tasks, setTasks] = useState([]);
    const { theme, toggleTheme } = useTheme();

    const handleAddTask = (title) => {
        const newTask = { title };
        setTasks([...tasks, newTask]);
    };

    const handleDeleteTask = useCallback((index) => {
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            newTasks.splice(index, 1);
            return newTasks;
        });
    }, []);

    useLayoutEffect(() => {
        document.title = `У вас ${tasks.length} завдань`;
    }, [tasks]);

    useLayoutEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="app">
            <h1>Приклад списку завдань</h1>
            <button onClick={toggleTheme}>Змінити тему</button>
            <TaskInput onAddTask={handleAddTask} />
            <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
        </div>
    );
}

export default App;
