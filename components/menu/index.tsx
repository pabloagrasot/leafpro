import type { NextPage } from 'next'

import Image from 'next/image'
import styles from '../styles/Menu.module.css'
const Menu: NextPage = () => {
  return (
    <header className={styles.header}>
        <Image src="/LeafPro-negro4.png" alt="Leaf Pro Logo" width={50} height={50} />
    </header>
  )
}

export default Menu
