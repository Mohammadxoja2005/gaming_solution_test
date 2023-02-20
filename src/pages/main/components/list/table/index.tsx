import React, { FC, useState, useEffect } from 'react'
// styles 
import styles from "./index.module.scss";
//  services
import { useGetCountriesQuery } from "../../../../../services/countries";
// icons
import CHECK from "../../../../../assets/icons/check.png";
// jotai 
import { useAtom } from "jotai";
import { useSearch } from '../../../../../hooks/useSearch';

interface tableInterface {
    code: string,
    name: string,
    native: string,
    phone: string,
    capital: string,
    currency: string,
    emoji: string,
    languages: Array<{ name: string }>,
    continent: { name: string }
}

const TABLE: FC = (): any => {
    const { data, isLoading }: any = useGetCountriesQuery('');
    const [text,] = useAtom<string>(useSearch);
    const [endData, setEndData] = useState<Array<tableInterface>>([]);

    useEffect(() => {
        try {
            (setEndData(data.countries.filter((value: any) => value.code == text.replace(/ /g,'').toUpperCase())));
        } catch (error) {
            console.log(error);
        }
    }, [text]);

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <div className={styles.table}>
            <table className={styles.table_table}>
                <tr className={styles.table_tr}>
                    <th className={styles.table_th}><img className={styles.table_img} src={CHECK} alt="" /></th>
                    <th className={styles.table_th}>Code</th>
                    <th className={styles.table_th}>Name</th>
                    <th className={styles.table_th}>Native</th>
                    <th className={styles.table_th}>Phone</th>
                    <th className={styles.table_th}>Capital</th>
                    <th className={styles.table_th}>Language</th>
                    <th className={styles.table_th}>Currency</th>
                    <th className={styles.table_th}>Continent</th>
                    <th className={styles.table_th}>Emoji</th>
                </tr>
                {endData && endData.map((value: any, index: number) => {
                    return (
                        <tr key={index}>
                            <td className={styles.table_td}><img className={styles.table_img} src={CHECK} alt="" /></td>
                            <td className={styles.table_td}>{value.code}</td>
                            <td className={styles.table_td}>{value.name}</td>
                            <td className={styles.table_td}>{value.native}</td>
                            <td className={styles.table_td}>{value.phone}</td>
                            <td className={styles.table_td}>{value.capital}</td>
                            <td className={styles.table_td}>{value.languages[0].name}</td>
                            <td className={styles.table_td}>{value.currency}</td>
                            <td className={styles.table_td}>{value.continent.name}</td>
                            <td className={styles.table_td}>{value.emoji}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default TABLE;