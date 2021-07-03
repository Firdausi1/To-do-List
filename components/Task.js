import homeStyles from '../styles/Home.module.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Task({ task, index, setTodo, todo }) {
  const completeTask = async () => {
    const res = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${task._id}`, {
      body: JSON.stringify({
        "completed": true
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
      },
      method: 'PUT'
    })
    const result = await res.json()

  }
  const deleteTask = async (index) => {
    const res = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${task._id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
      },
      method: 'DELETE'
    })
    const response = await res.json()
    const newTodos = [...todo];
    newTodos.splice(index, 1);
    setTodo(newTodos)
}

  return (
    <>
      <li className={homeStyles.listItem} style={{ textDecoration: (task.completed) ? "line-through" : "" }} ><span></span><CheckBoxOutlineBlankIcon fontSize="large" className={homeStyles.icon} style={{ color: task.completed ? "grey" : "" }} /><span className={homeStyles.listText} onClick={completeTask}>  {task.description} </span><span className={homeStyles.listItemIcon} onClick={() => deleteTask(index)} ><DeleteIcon /></span></li>
    </>

  )
}

export default Task

// href="/task/[id]" as={`/task/${task._id}`}