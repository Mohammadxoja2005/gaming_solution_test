import React, {FC} from 'react'
// styles 
import styles from "./index.module.scss";
// icons
import DASHBOARD from "../../../assets/icons/dashboard.png";

const CATEGORY: FC = () => {
    return (
        <div className={styles.category} >
            <div className={styles.category_name_con}>
                <img src={DASHBOARD} alt="" />
                <p className={styles.category_name}>Dashboard</p>
            </div>
        </div>
    )
}

export default CATEGORY;