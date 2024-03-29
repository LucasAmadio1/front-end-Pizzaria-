import { canSSRAuth } from "../../utils/canSSRAuth"
import Head from "next/head"
import styles from './styles.module.scss'
import { FiRefreshCcw } from 'react-icons/fi'
import { useState } from "react"
import { setupAPIClient } from "../../services/api"

import { Header } from "../../componets/Header"
import { ModalOrder } from '../../componets/ModalOrder'

import Modal from 'react-modal'

type OrderProps = {
  id: string,
  table: string | number,
  status: boolean,
  draft: boolean,
  name: string | null
}
interface HomeProps {
  orders: OrderProps[]
}

export type OrderItemProps = {
  id: string,
  amount: number,
  orderId: string,
  productId: string,
  product: {
    id: string,
    name: string,
    description: string,
    price: string,
    banner: string
  }
  order: {
    id: string,
    table: string,
    status: boolean,
    name: string | null
  }
}

export default function Dashboard({ orders }: HomeProps) {
  
  const [orderList, setOrderList] = useState(orders || [])
  console.log(orderList)

  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false)

  function handleCloseModal() {
    setModalVisible(false)
  }

  async function handleOpenModalView(id: string) {
    const apiClient = setupAPIClient()

    const response = await apiClient.get('/pedido/detail', {
      params: {
        orderId: id
      }
    })

    setModalItem(response.data)
    setModalVisible(true)
  }

  Modal.setAppElement('#__next')

  return (
    <>
      <Head>
        <title>Painel - Sujeito Pizzaria</title>
      </Head>
      <div>
        <Header />

        <main className={styles.container}>
          <div className={styles.containerHeader}>
            <h1>Últimos pedidos</h1>
            <button>
              <FiRefreshCcw size={25} color="#3FFFA3"/>
            </button>
          </div>

          <article className={styles.listOrders}>

            {orderList.map(item => (
              <section key={item.id} className={styles.orderItem}>
                <button onClick={ () => handleOpenModalView(item.id)}>
                  <div className={styles.tag}></div>
                  <span>Mesa {item.table}</span>
                </button>
              </section>
            ))}

          </article>

        </main>

        {modalVisible && (
          <ModalOrder 
            isOpen={modalVisible}
            onRequestClose={handleCloseModal}
            order={modalItem}
          />
        )}

      </div>
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (context) => {
  const apiClient = setupAPIClient(context)

  const response = await apiClient.get('/pedidos')


  return {
    props: {
      orders: response.data
    }
  }
})