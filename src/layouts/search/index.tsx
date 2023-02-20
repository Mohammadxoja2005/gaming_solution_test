import React, { FC } from 'react';
// styles
import styles from "./index.module.scss";
// icons 
import SEARCHIMG from "../../assets/icons/search.png";
import NOTIFICATION from "../../assets/icons/notification.png";
// jotai 
import { useAtom } from "jotai";
import { useSearch } from '../../hooks/useSearch';

const SEARCH: FC = () => {
  const [, setText] = useAtom(useSearch);

  return (
    <div className={styles.search}>

      <div className={styles.search_text}>
        <img src={SEARCHIMG} alt="" />
        <input className={styles.search_input} onChange={(e) => setText(e.target.value)} type="text" placeholder='Search for a country by code' />
      </div>

      <div className={styles.search_not}>
        <img src={NOTIFICATION} alt="" />
      </div>
    </div>
  )
}

export default SEARCH