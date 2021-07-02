import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import navStyles from '../styles/Navbar.module.css';

function Navbar({email}){
    return (
        <div className={navStyles.container}>
            <div className={navStyles.searchBar}>
                <input type="serach" className={navStyles.searchInput} placeholder="Search..."/>
                <SearchIcon/>
            </div>
            <div className={navStyles.notification}>
            <NotificationsNoneIcon/>
            <div className={navStyles.user}><AccountCircleIcon fontSize="large"/> <span className={navStyles.email}>{email}</span></div>
            </div>
        </div>
    )
}

export default Navbar;