import Head from 'next/head'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="keywords" content="apps"/>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis dicta suscipit itaque soluta rerum quas ex deleniti, sequi quam laborum laudantium perspiciatis magni nesciunt placeat nemo cumque quos maiores id.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam sed exercitationem quod, similique earum est beatae cumque, nisi reprehenderit fuga sunt nam sequi nemo maiores itaque voluptatem dolores aliquam!</p>
      <Link href="/apps">
      <a className={styles.btn}>See Apps Listing</a>
      </Link>
    </div>
    </>
  )
}
