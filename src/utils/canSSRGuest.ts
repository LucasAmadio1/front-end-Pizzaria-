import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { parseCookies } from 'nookies'

// funcao para paginas que so podem ser acessadas por visitantes
export function canSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {

    const cookies = parseCookies(context)

    // se o usuario tentar acessar a página porem tendo já um login salvo redirecionar

    if (cookies['@nextauth.token']) {
      return {
        redirect: {
            destination: '/dashboard',
            permanent: false,
        }
      }
    }


    return await fn(context)
  } 
}