import React from "react";
import styles from "./header.module.css";
import menu from "../../assets/menu.svg";
import search from "../../assets/search.svg";


const Header = () => {
    return (
        <div className={styles.container}>
            <img src={menu} alt="menu" className={styles.menu} />
            <p>Tasks</p>
            <div className={styles.search}>
                <img src={search} alt="search" className={styles.searchIcon} />
                <input type="text" />
            </div>
            <button className={styles.addColumn}>+</button>
        </div>
    )
}

export default Header;