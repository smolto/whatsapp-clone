// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import TodoList from '../components/TodoList'
import { CheckUserLogin } from '../components/control/CheckUserLogIn/CheckUserLogin'

export default function Home ({ userLoggedIn }) {
  return (
    <>
    <CheckUserLogin userLoggedIn={userLoggedIn}>

    </CheckUserLogin>
    </>
  )
}
