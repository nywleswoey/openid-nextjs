import Head from 'next/head'
import { Inter } from 'next/font/google'
import LoginButton from '@/components/login-button'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + OpenID Authentication</title>
        <meta name="description" content="Simple Next.Js app to test out OpenID authentication with Google" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{height:'100vh'}}>
        <LoginButton />
      </main>
    </>
  )
}
