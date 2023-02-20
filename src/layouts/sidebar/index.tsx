import React, { FC } from 'react';
// styles
import styles from "./index.module.scss";
// components 
import CATEGORY from './category';

const SIDEBAR: FC = () => {
  return (
    <div className={styles.sidebar}>

      <div className={styles.sidebar_title_con}>
        <h2 className={styles.sidebar_title}>Professional Gaming Solutions Ltd</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.sidebar_profile_info}>

          <div className={styles.sidebar_profile_img}>

          </div>

          <div className={styles.sidebar_profile_data}>
            <p className={styles.sidebar_profile_name}>Muhammadxoja</p>
            <p className={styles.sidebar_profile_email}>muhammadxojaofficial@gmail.com</p>
          </div>

        </div>

        <CATEGORY />
      </div>

    </div>
  )
}

export default SIDEBAR;