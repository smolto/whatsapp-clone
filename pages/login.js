import { useState, useContext, useEffect } from 'react'

import { Alert } from '../components/essential/Alert/Alert'
import { Layout } from '../components/essential/Layout/Layout'
import { Form } from '../components/essential/Form/Form'
import { InputText } from '../components/essential/InputText/InputText'
import { Button } from '../components/essential/Button/Button'
import { CheckUserLogin } from '../components/control/CheckUserLogIn/CheckUserLogin'

import styles from '../styles/Login.module.css'

import { API_URL } from '../shared/environment/constants'

import { getUserByEmail } from '../shared/services/UserService'

import UserContext from '../context/User/UserContext'

const Login = ({ userLoggedIn }) => {
  const { user, setUser } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMsg, setAlertMsg] = useState('')
  const [typeAlert, setTypeAlert] = useState('')

  const resetState = () => {
    setShowAlert(false)
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (email === '') {
      setShowAlert(true)
      setAlertMsg('Email is a required field ❌')
      setTypeAlert('danger')
    } else {
      if (isLogin) {
        const response = await getUserByEmail(API_URL, email)

        if (response === false) {
          setShowAlert(true)
          setAlertMsg('Invalid email! does not exist 🤯')
          setTypeAlert('danger')
        } else {
          setShowAlert(true)
          setAlertMsg(`Welcome ${response.name} :)!`)
          setTypeAlert('success')

          setUser(response)
        }
      }
    }
  }

  useEffect(() => {
    console.log(user)
  }, [user])

  return (
    <CheckUserLogin userLoggedIn={userLoggedIn}>
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
              {
                isLogin === true
                  ? <>
                    <span className={styles['login-title']}>Sign in to WhatsApp-Clone</span>
                    <InputText
                      type={'email'}
                      label={'E-mail: '}
                      text={email}
                      placeholder={'test@gmail.com'}
                      inputTextCSS={'input'}
                      required={true}
                      action={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      text={'Login'}
                      buttonCSS={'btn btn_primary'}
                      action={onSubmit}
                    />
                    {
                      showAlert === true ? <div className={styles['form-alert']}><Alert text={alertMsg} type={typeAlert} /></div> : null
                    }
                    <br />
                    New to Whatsapp-clone? <a href='#' onClick={() => {
                      setIsLogin(false)
                      resetState()
                    }}>Create an account</a>
                  </>
                  : <>
                    <span className={styles['login-title']}>Sign up to WhatsApp-Clone</span>
                    <InputText
                      type={'email'}
                      label={'E-mail: '}
                      text={email}
                      placeholder={'test@gmail.com'}
                      inputTextCSS={'input'}
                      required={true}
                      action={(e) => setEmail(e.target.value)}
                    />
                    <Button
                      text={'Sign up'}
                      buttonCSS={'btn btn_primary'}
                      action={onSubmit}
                    />
                    {
                      showAlert === true ? <div className={styles['form-alert']}><Alert text={alertMsg} type={typeAlert} /></div> : null
                    }
                    <br />
                    Already have an account? <a href='#' onClick={() => {
                      setIsLogin(true)
                      resetState()
                    }}>Sign in</a>
                  </>
              }
            </Form>
          </div>
        </div>
      </Layout>
    </CheckUserLogin>
  )
}

export default Login
