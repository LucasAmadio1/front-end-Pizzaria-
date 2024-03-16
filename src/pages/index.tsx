import styles from '../../styles/home.module.scss'

import Head from 'next/head'
import Image from 'next/image'
import logoImg from '../../public/logo.svg'

import { Input } from '../componets/ui/Input'
import { Button } from '../componets/ui/Button'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sujeito pizza</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo pizzaria" />

        <div className={styles.login}>
          <form>
            <Input 
              placeholder="Digite seu email"
              type="text"
            />

            <Input 
              placeholder="Sua senha"
              type="password"
            />

            <Button 
              type="submit"
              loading={false}
            >
              Cadastrar
            </Button>
          </form>

          <a className={styles.text}>Não possui uma conta? Cadastre-se</a>

        </div>
      </div>
    </>
  )
}
