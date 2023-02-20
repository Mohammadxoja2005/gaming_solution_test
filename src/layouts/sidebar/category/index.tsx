import React, { FC } from 'react'
// styles 
import styles from "./index.module.scss";
// icons
import DASHBOARD from "../../../assets/icons/dashboard.png";
// react-router-dom
import { Link } from "react-router-dom";

const CATEGORY: FC = () => {
    return (
        <div className={styles.category} >
            <div className={styles.category_name_con}>
                <img src={DASHBOARD} alt="" />
                <Link to="/"><p className={styles.category_name}>Dashboard</p></Link>
            </div>
        </div>
    )
}

export default CATEGORY;