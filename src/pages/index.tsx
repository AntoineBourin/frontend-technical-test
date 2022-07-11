import type { FC } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getLoggedUserId } from '../utils/getLoggedUserId'
import getUserConversations from '../services/api/conversations'
import { User } from '../types/user'
import { Conversation } from '../types/conversation'
import Conversations from '../components/templates/Conversations'

interface HomeProps {
  userId: User['id'];
  userConversations: Conversation[];
}

const Home: FC<HomeProps> = ({ userId, userConversations }) => {
  const year = new Date().getFullYear()

  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta name="description" content="Frontend exercise for developpers who want to join us on leboncoin.fr"></meta>
      </Head>
      <header>
        <h1>{userConversations.length} conversations</h1>
      </header>
      <main className={styles.main}>
        <Conversations conversations={userConversations} userLoggedId={userId} />
      </main>

      <footer className={styles.footer}>
        &copy; leboncoin - {year}
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const userId = getLoggedUserId();
  const userConversations = await getUserConversations(userId);

  return { props: { userId, userConversations } }
}

export default Home