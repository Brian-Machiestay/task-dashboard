import React from "react";
import styles from "./column.module.css";
import Task from "../task/task";
import CreateTaskModal from "../createTaskModal/createTaskModal";

import $ from 'jquery';

const Column = () => {

    const openCreateModal = (e) => {
        console.log('clicked')
        $('#createTaskModal').modal('show');
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.columnHeader}>
                <p className={styles.columnTitle}>Upcoming</p>
                <p className={styles.taskNo}>3 upcoming tasks</p>
            </div>
            <button onClick={openCreateModal}>+ Add Task</button>
            <div className={styles.tasks}>
                <Task />
                <Task />
            </div>
            <CreateTaskModal />
        </div>
    )
}

export default Column;