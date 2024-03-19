import styles from '../../../styles/home.module.scss'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../../public/logo.svg'

import { Input } from '../../componets/ui/Input'
import { Button } from '../../componets/ui/Button'

import { FormEvent, useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

import { toast } from 'react-toastify'

export default function SignUp() {
  const { signUp } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent) {
    event.preventDefault()

    if (name === '' || email === '' || password === '') {
      toast.warning('Preencha todos os campos')

      return;
    }

    setLoading(true)
    
    let data = {
      name,
      email,
      password
    }

    await signUp(data)
    setLoading(false)

  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro agora!</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />

        <div className={styles.login}>
          <h1>Criando sua conta</h1>

          <form onSubmit={handleSignUp}>
          <Input 
              placeholder="Digite seu nome"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <Input 
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <Input 
              placeholder="Sua senha"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button 
              type="submit"
              loading={loading}
            >
              Cadastrar
            </Button>
          </form>

          <Link href="/">
            <div className={styles.text}>Já possui uma conta? faça login!</div>
          </Link>
        </div>
      </div>
    </>
  )
}
