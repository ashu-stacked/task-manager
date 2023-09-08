import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

function TaskForm() {
  const authData = useSelector((store)=>store.auth)
  // State variables to hold form field values
  const [taskname, setTaskname] = useState('');
  const [content, setContent] = useState('');
  const [taskpriority, setTaskPriority] = useState('');
  const [tasktype, setTaskType] = useState('');
  const [startdate, setStartDate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [creationdate, setCreationDate] = useState('');
  const [formHeading,setFormHeading] = useState("Create new Task")
  const [idObjTask,setIdObjTask] = useState({id:"",user_id:""})
  const {id}  = useParams()

  //decide if form will act as create new task or update a task
  //will take the id from url and try to get the task by that id -> if no task found = create new task or if task fond= update new task
  useEffect(()=>{
    //check in DB if task exist by this id
    isTaskPresent(id)
  },[])

const isTaskPresent =async (id)=>{
    try{
      const res = await fetch("http://localhost:4000/tasks/"+`${id}`,{
        method: 'GET',
        headers: {
          "Content-Type": "application/json", // Corrected the header name
          "Authorization": `Bearer ${authData.authUser.token}`,
        },
      })
      const data = await res.json()
      if(data.id && data.user_id){
        console.log("task is present and let's update it")
        setFormHeading("Update task");
        setTaskname(data.taskname)
        setTaskPriority(data.taskpriority)
        setTaskType(data.tasktype)
        setIdObjTask({id:data.id,user_id:data.user_id})
      }

      else{
        console.error("no task found")
      }
    }
    catch(error){
      console.error(error)
    }
}

  // Handle form submission
  const handleTaskFormSubmit = async(e) => {
    const taskCreationObject = {
      taskname,
      content,
      taskpriority: parseInt(taskpriority, 10),
      tasktype,
      startdate,
      enddate,
      creationdate,
    };
    // Create a task object from the form data
    if(formHeading === "Create new Task"){
      callAPITaskCreation(taskCreationObject)
    }
    else{
      callAPITaskUpdate({...idObjTask,...taskCreationObject});
    }


  };
  const callAPITaskCreation=async(data)=>{
    try{
        const response = await fetch("http://localhost:4000/"+"tasks",{
            
            method:"POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json", 
                "Authorization":`Bearer ${authData.authUser.token}`
              },
            body:JSON.stringify(data) 
        })
        if(response){
          const newTask = await response.json()
          console.log("the response is",newTask) 
        }
        else{
            console.log("The task is not created")
        } 
    }
    catch(error){
       console.log("error during task creation is",error)
    }
  }
  const callAPITaskUpdate=async(data)=>{
    try{
        const response = await fetch("http://localhost:4000/tasks/"+`${data.id}`,{
            
            method:"PUT",
            headers: {
                "Content-Type": "application/json", 
                "Authorization":`Bearer ${authData.authUser.token}`
              },
            body:JSON.stringify(data) 
        })
        const resMessageObj =await response.json()
        if(resMessageObj.message ="Task updated successfully"){
          console.log("the updated task  is",resMessageObj) 
        }
        else{
            console.log("The task is not updated")
        } 
    }
    catch(error){
       console.log("error during task update is",error)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4 space-y-4 bg bg bg-purple-200 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">{formHeading}</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleTaskFormSubmit()}} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="taskname" className="font-bold text-lg">Task Name:</label>
            <input
              type="text"
              id="taskname"
              name="taskname"
              value={taskname}
              onChange={(e) => setTaskname(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 bg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="content" className="font-bold text-lg">Content:</label>
            <textarea
              id="content"
              name="content"
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label htmlFor="taskpriority" className="font-bold text-lg">Task Priority:</label>
            <input
              type="number"
              id="taskpriority"
              name="taskpriority"
              value={taskpriority}
              onChange={(e) => setTaskPriority(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="tasktype" className="font-bold text-lg">Task Type:</label>
            <input
              type="dropdown"
              id="tasktype"
              name="tasktype"
              value={tasktype}
              onChange={(e) => setTaskType(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="startdate" className="font-bold text-lg">Start Date:</label>
            <input
              type="datetime-local"
              id="startdate"
              name="startdate"
              value={startdate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="enddate" className="font-bold text-lg">End Date:</label>
            <input
              type="datetime-local"
              id="enddate"
              name="enddate"
              value={enddate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="creationdate" className="font-bold text-lg">Creation Date:</label>
            <input
              type="datetime-local"
              id="creationdate"
              name="creationdate"
              value={creationdate}
              onChange={(e) => setCreationDate(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="bg bg-pink-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mt-3">{formHeading}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
