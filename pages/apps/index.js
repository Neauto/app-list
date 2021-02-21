import Head from 'next/head'
import styles from '../../styles/app.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { apps: data }
    }
}

const Apps = ({ apps }) => {
    return ( 
        <>
        <Head>
            <title>App Listing</title>
            <meta name="keywords" content="apps"/>
        </Head>
        <div>
            <h1>All Apps</h1>
            {apps.map(app => (
                <Link href={'/apps/' + app.id} key={app.id}>
                    <a className={styles.single}>
                        <h3>{ app.name }</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
     );
}
 
export default Apps;