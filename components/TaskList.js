import homeStyles from '../styles/Home.module.css';
import Task from '../components/Task';
import Link from 'next/link';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState, useEffect } from 'react';

function Tasklist({ tasks }) {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addToDo = async event => {
        event.preventDefault()
        const res = await fetch(
            "https://api-nodejs-todolist.herokuapp.com/task",
            {
                body: JSON.stringify({
                    description: event.target.task.value
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
                },
                method: 'POST'
            }
        )
        const result = await res.json();
        const data = result.data;
        setTodo([data, ...todo])
        setInput("")
    }

    useEffect(() => {
        setTodo(tasks.reverse())
    }, [])

    return (
        <>
            <form onSubmit={addToDo} className={homeStyles.form}>
                <input name="task" type="text" placeholder="Add new todo" className={homeStyles.input} onChange={handleChange} value={input}/>
                <button type="submit" className={homeStyles.button}><AddCircleOutlineIcon fontSize="large" /></button>
            </form>
            <ul className={homeStyles.list}>
                {todo.length >= 1 ? todo.map((task, index) => (
                    <Task task={task} setTodo= {setTodo} todo = {todo} index={index}/>
                )) : "Enter a todo item" }
            </ul>
        </>
    )
}

export default Tasklist;
