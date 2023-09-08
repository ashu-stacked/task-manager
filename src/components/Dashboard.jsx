import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const userData = useSelector((store) => store.auth);
  const navigate =useNavigate()

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const res = await fetch("http://localhost:4000/tasks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json", // Corrected the header name
          "Authorization": `Bearer ${userData.authUser.token}`,
        },
      });
      const tasksData = await res.json();
      if (tasksData.length > 0) {
        console.log("tasks are available");
        setTasks(tasksData);
      } else {
        throw new Error("No tasks available");
      }
    } catch (error) {
      console.error("Failed to execute the API:", error);
    }
  };

  const handleEdit = (taskId) => {
    // Implement the edit functionality here, e.g., navigate to an edit page or open a modal.
    console.log(`Edit task with ID ${taskId}`);
    navigate("/Task-management-screen"+`/${taskId}`);
  };

  return (
    <div className='flex justify-center p-4 w-100%'>
      <table className="table-auto">
        <thead className='bg-purple-500 text-white'>
          <tr>
            <th className="border px-4 py-2">Task Name</th>
            <th className="border px-4 py-2">Task Priority</th>
            <th className="border px-4 py-2">Task Type</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className='hover:bg-gray-100'>
              <td className="border px-4 py-2">{task.taskname}</td>
              <td className="border px-6 py-2">{task.taskpriority}</td>
              <td className="border px-4 py-2">{task.tasktype}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
                  onClick={(e) => handleEdit(task.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
