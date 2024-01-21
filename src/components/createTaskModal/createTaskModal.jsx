import React from "react";

import styles from './createTask.module.css';

const CreateTaskModal = () => {

    return (
        <div className={`container ${styles.container}`}>
        {/* Bootstrap Modal */}
            <div className="modal fade" id="createTaskModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className={`modal-title ${styles.title}`} id="exampleModalLabel">Create Task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className=''>&times;</span>
                            </button>
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <label htmlFor="#taskTitle">Task Title</label>
                            <input type="text" id='taskTitle' />
                            <label htmlFor="#dueDate">Due Date</label>
                            <input type="date" id='dueDate' />
                            <label>Task Description</label>
                            <textarea placeholder="design a flyer for this company"></textarea>
                            <button className={styles.createEventBtn}>Create Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTaskModal;