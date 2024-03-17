import { FormEvent, useContext, useState } from 'react'

import styles from '../../styles/home.module.scss'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../public/logo.svg'

import { Input } from '../componets/ui/Input'
import { Button } from '../componets/ui/Button'

import { AuthContext } from '../contexts/AuthContex'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    let data = {
      email,
      password
    }

    await signIn(data)
  }

  return (
    <>
      <Head>
        <title>Sujeito pizza</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input 
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={ (event) => setEmail(event.target.value)}
            />

            <Input 
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={ (event) => setPassword(event.target.value)}
            />

            <Button 
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>
          
            <Link href='/signup'>
              <div className={styles.text}>Não possui uma conta? Cadastre-se</div>
            </Link>
        </div>
      </div>
    </>
  )
}
