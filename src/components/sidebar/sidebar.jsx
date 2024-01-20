import React from "react";
import styles from './sidebar.module.css'

const Sidebar = () => {
    return(
        <div className={styles.container}>
            <p className={styles.logo}>TeachMateAI</p>
            <p className={styles.active}>Tasks</p>
            <p>Notification</p>
            <p>Notification</p>
        </div>
    )
}

export default Sidebar;