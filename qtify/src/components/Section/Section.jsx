import React, { useEffect, useState } from 'react'
import styles from './Section.module.css'
import Card from '../../components/Card/Card'
import useFetch from '../../hooks/useFetch'
import CircularProgress from '@mui/material/CircularProgress';

function Section({ title, collapse, path, type}) {

    const [collapsed, setCollapsed] = useState(true)
    const { response : data } = useFetch(path)
    const [response, setResponse] = useState(data)

    useEffect(() => {
        setResponse(data)
    }, [data?.loading])

   


    const handleCollapse = () => {
        setCollapsed(!collapsed)
    }

    return (
        <section className={styles.section}>
            <div className={styles.title_container}>
                <h3 className={styles.title}>{title}</h3>
                {collapse && <button className={styles.button} onClick={handleCollapse}>{collapsed ? 'Show All' : 'Collapse'}</button>}
            </div>

            {!response.loading && !response.err && (
              
                    <div className={styles.cards}>
                        {response.data.map(item => (
                            <Card key={item.id} data={item} type={type} />
                        ))}
                    </div>
              

            )}

            {response.loading && <div className={styles.loading}>
                <span>Loading</span>
                <CircularProgress />
            </div>}

            {response.err && <div className={styles.loading}>Failed to load - {response.err}</div>}

        </section>
    )
}

export default Section