import React from "react";
import styles from './viewTask.module.css';

//import $ from 'jquery';

const ViewTaskModal = () => {
/*
    const getVolunteers = (e) => {
        $(`.${styles.searchResults}`).css('display', 'block');
        if (e.key === 'Enter') {
            console.log('this is the enter key')
        }
    }
*/
    return (
        <div className={`container ${styles.container}`}>
        {/* Bootstrap Modal */}
            <div className="modal fade" id="viewTaskModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className={`modal-title ${styles.title}`} id="exampleModalLabel">View Task</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" className=''>&times;</span>
                            </button>
                        </div>
                        <div className={`modal-body ${styles.modalBody}`}>
                            <label htmlFor="#taskTitle">Task Title</label>
                            <input type="text" id='taskTitle' disabled />
                            <label htmlFor="#dueDate">Due Date</label>
                            <input type="date" id='dueDate' disabled />
                            <label>Task Description</label>
                            <textarea placeholder="design a flyer for this company" disabled></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTaskModal;