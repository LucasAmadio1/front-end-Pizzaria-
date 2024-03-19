import { FormEvent, useState } from 'react'
import Head from 'next/head'
import styles from './styles.module.scss'

import { api } from '../../services/apiClient'

import { Header } from '../../componets/Header'
import { toast } from 'react-toastify'

export default function Category() {
  const [name, setName] = useState('')
  
  async function handleRegister(event: FormEvent) {
    event.preventDefault()

    if (name === '') {
      return toast.warning('Preencha todos os campos.')
    }

    await api.post('/category', {
      name: name
    })

    toast.success('Categoria criada com sucesso!')
    setName('')
  }

  return (
    <>
      <Head>
        <title>Nova categoria - Sujeito Pizzaria</title>
      </Head>   
      <div>
        <Header />

        <main className={styles.container}>
          <h1>Cadastrar categoria</h1>

          <form className={styles.form} onSubmit={handleRegister}>
            <input 
              type="text"
              placeholder="Digite o nome da categoria"
              className={styles.input}
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <button className={styles.buttonAdd} type="submit">
              Cadastrar
            </button>

          </form>
        </main>
      </div>
    </>
  )
}