import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import homeStyles from '../styles/Home.module.css';

function AddToDo(){
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
    
        const result = await res.json()
        console.log(result);
      }
    return (
            <form onSubmit={addToDo} className={homeStyles.form}>
                <input name="task" type="text" placeholder="Add new todo" className={homeStyles.input}/>
                <button type="submit"  className={homeStyles.button}><AddCircleOutlineIcon fontSize="large"/></button>
            </form>
    )
}

export default AddToDo;