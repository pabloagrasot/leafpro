import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/menu/index'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Leaf Pro Tattoo Balm | Crema vegana para tatuajes con CBD</title>
        <meta name="description" content="Leaf Pro tattoo balm es una crema para el cuidado de los tatuajes. Su Fórmula vegana con CBD cura y repara la piel tras los tatuajes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
