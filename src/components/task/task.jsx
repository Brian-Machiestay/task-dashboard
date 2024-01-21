import React from "react";
import styles from './task.module.css';
import view from '../../assets/icons8-eye-30.png';
import edit from '../../assets/icons8-edit-24.png';

import EditTaskModal from "../editTaskModal/editTaskModal";
import ViewTaskModal from "../viewTaskModal/viewTaskModal";
import $ from 'jquery'

const Task = () => {

    const openViewModal = () => {
        $('#viewTaskModal').modal('show')
    }

    const openEditModal = () => {
        $('#editTaskModal').modal('show')
    }

    return (
        <>
            <div className={styles.container}>
                <p className={styles.title}>Create a task Dashboard</p>
                <p className={styles.date}>Due date 22 Jan, 2024</p>
                <p className={styles.description}>Create a task dashboard in react and redux...</p>
                <div className={styles.views}>
                    <img src={view} alt="view" onClick={openViewModal}/>
                    <img src={edit} alt="edit" onClick={openEditModal} />
                </div>
            </div>
            <EditTaskModal />
            <ViewTaskModal />
        </>
    )
}

export default Task;