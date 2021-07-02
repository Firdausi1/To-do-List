import homeStyles from '../styles/Home.module.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import DeleteIcon from '@material-ui/icons/Delete';

function Task({item, id, completed, index, data, setData}){
    const completeTask = async() => {
        const res = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
            body: JSON.stringify({
                "completed" : true
              }),
            headers: {
              'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
            },
            method: 'PUT'
          })
        const data = await res.json()
        console.log(data)
    
    }
    const deleteTask = async(index) => {
        const res = await fetch(`https://api-nodejs-todolist.herokuapp.com/task/${id}`, {
            headers: {
              'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRkZWJiZTk0YmRkYjAwMTcxN2M5YTIiLCJpYXQiOjE2MjUxODA3ODN9.NHludWzWcELzr0I1tnc59gwkJLT6JrruwECHudjaTH8'
            }
          })
        const response = await res.json()
            const newTodos = [...data];
            newTodos.splice(index, 1);
            setData(newTodos)
    
    }

    return (
        <>
        <li className={homeStyles.listItem} style={{ textDecoration: completed ? "line-through" : "" }} ><CheckBoxOutlineBlankIcon fontSize="large" className={homeStyles.icon} style={{ color: completed ? "grey" : "" }}/><span className={homeStyles.listText} onClick={completeTask}>  {item} </span><span className={homeStyles.listItemIcon} onClick={()=> deleteTask(index)} ><DeleteIcon/></span></li>
        </>
            
    )
}

export default Task