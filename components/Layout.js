import Sidebar from './Sidebar';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';


function Layout({children, email}){
    return (
        <div className={styles.container}>
            <Sidebar/>
            <div className={styles.body}>
                <Navbar email={email}/>
                {children}
            </div>
        </div>
    )
}

export default Layout;