import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Taskview() {
    const [data, setData] = useState([]);

    // Read: Fetch all tasks
    async function getData() {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/todo');
            setData(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    }

    // Create: Add a new task
    async function addTask(task) {
        try {
            await axios.post('http://localhost:3000/api/v1/todo', { task });
            getData(); // Refresh tasks after adding
        } catch (error) {
            console.error("Error adding task:", error);
        }
    }

    // Update: Update an existing task
    async function updateTask(taskId, updatedTask) {
        try {
            await axios.put(`http://localhost:3000/api/v1/todo/${taskId}`, { task: updatedTask });
            getData(); // Refresh tasks after updating
        } catch (error) {
            console.error("Error updating task:", error);
        }
    }

    // Delete: Remove a task
    async function handleDelete(taskId) {
        try {
            await axios.delete(`http://localhost:3000/api/v1/todo/${taskId}`);
            getData(); // Refresh tasks after deletion
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <ul className="task-list">
                {data.map((task) => (
                    <li key={task._id} className="task-item">
                        <span className="task-text">Task: {task.task}</span>
                        <button onClick={() => handleDelete(task._id)} className="delete-btn">Delete</button>
                        <button onClick={() => updateTask(task._id, "Updated Task")} className="update-btn">Update</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Taskview;