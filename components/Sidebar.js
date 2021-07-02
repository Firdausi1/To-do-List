import sidebarStyles from '../styles/Sidebar.module.css';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useRouter } from 'next/router'

function Sidebar(){
    const router = useRouter()
    const logOut = async() => {
        const res = await fetch("https://api-nodejs-todolist.herokuapp.com/user/logout", {
            headers: {
              'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRiZGQxM2JiMjIzZTEyMjY5NzMxMmEiLCJpYXQiOjE1NzQ2OTEwNDl9.R4sJr3wnoiG_HwKT3to40u6Z1b_CiClH66sJZRRj9bA'
            },
            method: 'POST'
          })
          const result = await res.json()
          console.log(result);
          if(result){
            router.push("/login")
          }
      }
    return (
        <div className={sidebarStyles.container}>
            <h1 className={sidebarStyles.logo}>logo</h1>
            <ul className={sidebarStyles.list}>
                <li className={sidebarStyles.listItem}><HomeIcon/><span className={sidebarStyles.text}>Home</span></li>
                <li className={sidebarStyles.listItem}><ListAltIcon/><span className={sidebarStyles.text}>Today</span></li>
                <li className={sidebarStyles.listItem}><CategoryIcon/><span className={sidebarStyles.text}>Categories</span></li>
                <li className={sidebarStyles.listItem}><AssignmentTurnedInIcon/><span className={sidebarStyles.text}>Completed</span></li>
            </ul>
            <div className={sidebarStyles.logout} onClick={logOut}>Log Out <ExitToAppIcon/></div>
        </div>
    )
}

export default Sidebar;