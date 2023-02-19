import React, { FC } from 'react'
// styles 
import styles from "./index.module.scss";
//  services
import { useGetCountriesQuery } from "../../../../../services/countries";
// icons
import CHECK from "../../../../../assets/icons/check.png";

const TABLE: FC = () => {
    const { data, isLoading }: any = useGetCountriesQuery('');

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <div className={styles.table}>
            <table className={styles.table_table}>
                <tr className={styles.table_tr}>
                    <th className={styles.table_th}><img src={CHECK} alt="" /></th>
                    <th className={styles.table_th}>Code</th>
                    <th className={styles.table_th}>Name</th>
                    <th className={styles.table_th}>Native</th>
                    <th className={styles.table_th}>Phone</th>
                    <th className={styles.table_th}>Capital</th>
                    <th className={styles.table_th}>Currency</th>
                </tr>
                {data && data.countries.map((value: any, index: number) => {
                    return (
                        <tr>  
                            <td className={styles.table_td} ><img src={CHECK} alt="" /></td>
                            <td className={styles.table_td} >{value.code}</td>
                            <td className={styles.table_td} >{value.name}</td>
                            <td className={styles.table_td} >{value.native}</td>
                            <td className={styles.table_td} >{value.phone}</td>
                            <td className={styles.table_td} >{value.capital}</td>
                            <td className={styles.table_td} ><p>{value.currency}</p></td>
                        </tr>
                    )
                })}
                {/* <tr>
                        <td>Megha</td>
                        <td>19</td>
                        <td>Female</td>
                    </tr>
                    <tr>
                        <td>Subham</td>
                        <td>25</td>
                        <td>Male</td>
                    </tr> */}
            </table>
        </div>
    )
}

export default TABLE;