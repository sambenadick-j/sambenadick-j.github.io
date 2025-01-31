import React, { useState } from 'react'
import Taskview from './Taskview';
import axios from 'axios';

function Addtask() {
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [updatedValue, setUpdatedValue] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        if (!value.trim()) return;

        try {
            await axios.post('http://localhost:3000/api/v1/todo', { task: value });
            setValue(""); // Clear input after adding
            refreshTasks(); // Refresh tasks list
        } catch (err) {
            console.error("Error adding task:", err);
        }
    };

    const refreshTasks = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/todo');
            setTasks(response.data);
        } catch (err) {
            console.error("Error fetching tasks:", err);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`http://localhost:3000/api/v1/todo/${taskId}`);
            refreshTasks(); // Refresh tasks list after deletion
        } catch (err) {
            console.error("Error deleting task:", err);
        }
    };

    const handleUpdate = async (taskId) => {
        try {
            if (!updatedValue.trim()) return;
            await axios.put(`http://localhost:3000/api/v1/todo/${taskId}`, {
                task: updatedValue
            });
            setEditingTask(null);
            setUpdatedValue("");
            refreshTasks();
        } catch (err) {
            console.error("Error updating task:", err);
        }
    };

    return (
        <div className="todo-container">
            <h1 className="app-title">Todo Application</h1>
            <form onSubmit={handleClick} className="todo-form">
                <table className="task-table">
                    <tbody>
                        <tr className="task-row">
                            <td className="task-cell">
                                <label htmlFor="addtask" className="task-label">Add Task</label>
                            </td>
                            <td className="task-cell">
                                <input 
                                    className="task-input" 
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)} 
                                    type="text" 
                                    placeholder="Add task" 
                                    id="addtask" 
                                />
                            </td>
                        </tr>
                        {tasks.map(task => (
                            <tr key={task._id} className="task-row">
                                <td className="task-cell">
                                    {editingTask === task._id ? (
                                        <input
                                            className="task-input"
                                            value={updatedValue}
                                            onChange={(e) => setUpdatedValue(e.target.value)}
                                            type="text"
                                            placeholder="Update task"
                                        />
                                    ) : (
                                        <span className="task-text">{task.task}</span>
                                    )}
                                </td>
                                <td className="button-cell">
                                    {editingTask === task._id ? (
                                        <button className="add-btn" onClick={() => handleUpdate(task._id)}>Save</button>
                                    ) : (
                                        <button className="edit-btn" onClick={() => {
                                            setEditingTask(task._id);
                                            setUpdatedValue(task.task);
                                        }}>Edit</button>
                                    )}
                                    <button className="delete-btn" onClick={() => handleDelete(task._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="add-btn" type="submit">Add</button>
            </form>
            <Taskview tasks={tasks} className="task-view"/>
        </div>
    )
}

export default Addtask