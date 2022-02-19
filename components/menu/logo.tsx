import logo from '../../public/LeafPro-negro4.png'
import Image from 'next/image'
import styles from '../../styles/Menu.module.css'
import type { NextComponentType } from 'next'

const Logo: NextComponentType = () => {
  return (
      <div className={styles.logo__container}>
        <Image
         className={styles.logo__container__logo}
         src={logo}
         alt="Leaf Pro Logo"
         width={100}
         height={100}
         priority
        />
      </div>
  )
}

export default Logo