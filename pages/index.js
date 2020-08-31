import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useAuth } from '../lib/auth'

const Home = () => {
  const auth = useAuth()

  return (
    <div className={styles.container}>
      <Head>
        <title>Fast Feedback Demo</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Fast Feedback</h1>
        <button onClick={e => auth.signinWithGithub()}>sign in</button>
        <div>
          <p>{auth?.user?.email}</p>
        </div>
        {auth?.user && <button onClick={e => auth.signout()}>sign out</button>}
      </main>
    </div>
  )
}

export default Home
