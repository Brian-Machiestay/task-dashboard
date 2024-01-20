import React from "react";
import styles from "./mainpage.module.css";
import Header from "../header/header";


const Mainpage = () => {
    return (
        <div className={styles.container}>
            <Header />
            <p>Another p tag in the main page</p>
        </div>
    )
}

export default Mainpage;