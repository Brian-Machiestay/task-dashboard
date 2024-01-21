import React from "react";
import styles from './sidebar.module.css'

import $ from 'jquery';

const Sidebar = () => {

    const closeSidebar = () => {
        $(`.${styles.container}`).css('display', 'none');
    }

    return(
        <div className={styles.container}>
            <div className={styles.close}>
                <button type="button" onClick={closeSidebar}>X</button>
            </div>
            <p className={styles.logo}>TeachMateAI</p>
            <p className={styles.active}>Tasks</p>
            <p>Notification</p>
            <p>Notes</p>
        </div>
    )
}

export default Sidebar;