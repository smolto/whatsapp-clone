// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '../components/essential/Button/Button'
import { InputText } from '../components/essential/InputText/InputText'

export default function Home () {
  return (
    <div className={styles.container}>
      <InputText
        text={''}
        inputTextCSS={'input'}
      />
      <Button
        text={'Santi'}
        buttonCSS={'btn btn-primary'}
      />
    </div>
  )
}
