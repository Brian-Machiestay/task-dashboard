import React from "react";
import styles from "./column.module.css";


const Column = () => {
    return (
        <div className={styles.container}>
            <div className={styles.columnHeader}>
                <p className={styles.columnTitle}>Upcoming</p>
                <p className={styles.taskNo}>3 upcoming tasks</p>
            </div>
            <button>+ Add Task</button>
        </div>
    )
}

export default Column;