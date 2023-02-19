import { Fragment, FC } from 'react';
// styles
import styles from "./index.module.scss";
// components  
import LIST from './components/list';
// layouts
import SIDEBAR from '../../layouts/sidebar';
import SEARCH from '../../layouts/search';

const MAIN: FC = () => {

  return (
    <Fragment>
      <div className={styles.main}>
        <SIDEBAR />

        <div className={styles.main_list}>
          <SEARCH />
          <LIST />
        </div>

      </div>
    </Fragment>
  )
}

export default MAIN;