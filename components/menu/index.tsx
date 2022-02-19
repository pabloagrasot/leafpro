import type { NextComponentType } from 'next'
import styles from '../../styles/Menu.module.css'
import Image from 'next/image'
import { useState } from 'react'
import logo from '../../public/LeafPro-negro4.png'
import Link from 'next/link'
const Menu: NextComponentType = () => {
  const [menu, setMenu] = useState(false)
  const showMenu = () => setMenu(!menu);

  return (
    <header className={styles.header}>

      <div className={styles.logo__container}>
        <Image 
         onClick={showMenu}
         className={styles.logo__container__logo}
         src={logo}
         alt="Leaf Pro Logo"
         width={100}
         height={100}
         priority
        />
      </div>

        <nav className={menu ? styles.menu + " " + styles.active : styles.menu }>
          <section className={styles.menu__links__section}>
            
            <Link href='/'>
              <div className={styles.menu__links}>
                <img className={styles.menu__links__icon} src='/home.png'alt="Inicio" />
                <a>Inicio</a>
              </div>
            </Link>
            
            <Link href='/blog/'>
              <div className={styles.menu__links}>
                <img className={styles.menu__links__icon} src='/blog.png'alt="Blog" />
                <a>Blog</a>
              </div>
            </Link>
          </section>

          <section className={styles.menu__links__section}>
            <Link href='/tienda/'>
              <div className={styles.menu__links}>
                <img className={styles.menu__links__icon} src='/cream.png'alt="Tienda" />
                <a>Tienda</a>
              </div>
            </Link>
            
            <Link href='/contacto/'>
              <div className={styles.menu__links}>
                <img className={styles.menu__links__icon} src='/contact.png'alt="Contacto" />
                <a>Contacto</a>
              </div>
            </Link>
          </section>
        </nav>
    </header>
  )
}

export default Menu
