import { useContext } from 'react'
import Link from 'next/link'
import styles  from './styles.module.scss'
import Image from 'next/image'
import { FiLogOut } from 'react-icons/fi'

import { AuthContext } from '../../contexts/AuthContext' 

export function Header() {

  const { signOut } = useContext(AuthContext)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src="/logo.svg" width={190} height={60} alt="logo" />
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category">
            <div>Categoria</div>
          </Link>

          <Link href="/product">
            <div>Cardapio</div>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color="#fff" size={24}/>
          </button>

        </nav>
          
      </div>
    </header>
  )
} 