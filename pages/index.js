import DoneIcon from '@material-ui/icons/Done';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import homeStyles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import AddToDo from '../components/AddToDo';
import Task from '../components/Task';
import { useEffect, useState } from 'react'

function HomePage(){
    const[user, setUser] = useState([]);
    const [data, setData] = useState([]);

    const getData = async() => {
        const res = await fetch("https://api-nodejs-todolist.herokuapp.com/task", {
            headers: {
              'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
            }
          })
        const response = await res.json()
        const data = response.data;
        setData(data)
      }
    const getUser = async() => {
        const res = await fetch("https://api-nodejs-todolist.herokuapp.com/user/me", {
            headers: {
              'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
            }
          })
        const data = await res.json()
        console.log(data);
        setUser(data)
    }

    useEffect(() => {
        getUser();
        getData();
      }, [])

    return (
        <Layout email={user.email}>
            <h1 className={homeStyles.heading}>Hello {user.name}!</h1>
            <h4>Today's Task</h4>
            <AddToDo/>
            <ul className={homeStyles.list}>
                {data.map((task, index) => (
        <Task item={task.description} id={task._id} key={task._id} index={index} completed={task.completed} data={data} setData={setData} />
                ))}
            </ul>
        </Layout>
    )
}

export default HomePage;