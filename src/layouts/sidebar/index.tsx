import Reac, {FC} from 'react';
// styles
import styles from "./index.module.scss";
// components 
import CATEGORY from './category';

const SIDEBAR: FC= () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_line}></div>
      <h2 className={styles.sidebar_title}>SaaS Kit</h2>

      <div className={styles.sidebar_profile_info}>

        <div className={styles.sidebar_profile_img}>

        </div>

        <div className={styles.sidebar_profile_data}>
          <p className={styles.sidebar_profile_name}>Sierra Ferguson</p>
          <p className={styles.sidebar_profile_email}>s.ferguson@gmail.com</p>
        </div>

      </div>  
      
      <CATEGORY/>

    </div>
  )
}

export default SIDEBAR;