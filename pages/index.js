import homeStyles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';

function HomePage({tasks}){
    return (
        <Layout tasks={tasks}>
            <h1 className={homeStyles.heading}>Hello!</h1>
            <h4>Today&apos;s Task</h4>
            <TaskList tasks={tasks}/>
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://api-nodejs-todolist.herokuapp.com/task", {
        headers: {
          'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
        }
      })
    const tasks = await res.json()
    return { props: { tasks: tasks.data} }
}

export default HomePage;