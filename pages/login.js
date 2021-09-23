import { useState } from 'react'

import { Layout } from '../components/essential/Layout/Layout'
import { Form } from '../components/essential/Form/Form'
import { InputText } from '../components/essential/InputText/InputText'
import { Button } from '../components/essential/Button/Button'

import styles from '../styles/Login.module.css'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Hola mundo')
  }

  return (
    <Layout
      title={'Login'}
    >
      <div className={styles.content}>
        <div className={styles['form-container']}>
          <Form
            action={onSubmit}
          >
            <img
              src={'/logo.svg'}
              alt="Picture of the author"
            />
            <span className={styles['login-title']}>Sign in to WhatsApp-Clone</span>
            <InputText
              type={'email'}
              label={'E-mail: '}
              text={email}
              placeholder={'test@gmail.com'}
              inputTextCSS={'input'}
              action={(e) => setEmail(e.target.value)}
            />
            <InputText
              type={'password'}
              label={'Password: '}
              text={password}
              placeholder={''}
              inputTextCSS={'input'}
              action={(e) => setPassword(e.target.value)}
            />
            <Button
              text={'Login'}
              buttonCSS={'btn btn-primary'}
              action={onSubmit}
            />
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default Login
