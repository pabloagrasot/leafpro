import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Menu from '../../components/menu/index'

const Contacto: NextPage = () => {
  return (
    <>
      <Head>
        <title>Leaf Pro Tattoo Balm | Crema vegana para tatuajes con CBD</title>
        <meta name="description" content="Leaf Pro tattoo balm es una crema para el cuidado de los tatuajes. Su Fórmula vegana con CBD cura y repara la piel tras los tatuajes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu></Menu>
      <h1 className={styles.title}>
        Contacto
      </h1>
     
    </>
  )
}

export default Contacto