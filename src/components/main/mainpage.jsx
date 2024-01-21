import React from "react";
import styles from "./mainpage.module.css";
import Header from "../header/header";
import Column from "../column/column";


const Mainpage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.columnContainer}>
                <Column />
                <Column />
                <Column />
                <Column />
            </div>
        </div>
    )
}

export default Mainpage;