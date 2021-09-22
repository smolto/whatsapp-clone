// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Profile from '../components/Profile'

export default function Home () {
  return (
    <div className={styles.container}>
      <Profile />
    </div>
  )
}
