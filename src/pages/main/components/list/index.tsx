import { FC } from "react";
// styles
import styles from "./index.module.scss";
// images 
import DOWN from "../../../../assets/icons/down.png";
// components
import TABLE from "./table";

const LIST: FC = (): any => {

  return (
    <div className={styles.list}>
      <div className={styles.list_categorize}>
        <p className={styles.list_cat_name}>Country:</p>

        <div className={styles.list_by_type_con} >
          <p className={styles.list_by_type}>All</p>
          <img src={DOWN} alt="" />
        </div>
      </div>

      <TABLE />
    </div>
  )
}

export default LIST;