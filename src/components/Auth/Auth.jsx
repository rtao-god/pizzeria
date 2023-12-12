import React, { useState } from 'react'
import cl from './Auth.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@hooks/localStorage'

export default function Auth({ modalAuth, setModalAuth }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [emailSignIn, setEmailSignIn] = useState('')
  const [emailSignUp, setEmailSignUp] = useState('')
  const [passwordSignIn, setPasswordSignIn] = useState('')
  const [passwordSignUp, setPasswordSignUp] = useState('')
  const [name, setName] = useState('William')
  const [savedUserData, setSavedUserData] = useLocalStorage('dataUser', { password: '', email: '', name: '' })
  const [showPassword, setShowPassword] = useState(false)

  const handleSignIn = e => {
    e.preventDefault()
    if (emailSignIn === savedUserData.email && passwordSignIn === savedUserData.password) {
      setModalAuth(false)
      alert(`${savedUserData.name}, You have successfully auth. Congratulations`)
    }
  }

  const handleSignUp = e => {
    e.preventDefault()
    if (passwordSignUp.length > 2 && name.length >= 3) {
      setSavedUserData({
        ...savedUserData,
        password: passwordSignUp,
        email: emailSignUp,
        name: name,
      })
      setIsSignUp(false)
    }
  }

  return (
    <>
      {modalAuth && (
        <div className={cl.authorization}>
          <FontAwesomeIcon onClick={() => setModalAuth(false)} className={cl.closeButton} icon={faXmark} />
          {!isSignUp ? (
            <div className={cl.userData}>
              <span className={`${cl.btn} ${cl.btnSignIn}`}> Sign in </span>
              <span className={cl.separator}>/</span>
              <span onClick={() => setIsSignUp(true)} className={cl.btn}>
                {' '}
                Sign up{' '}
              </span>
              <form onSubmit={handleSignIn}>
                <div className={cl.email}>
                  <label> Email </label>
                  <input
                    value={emailSignIn}
                    onChange={e => setEmailSignIn(e.target.value)}
                    minLength="5"
                    maxLength="25"
                    type="email"
                    required
                  />
                </div>
                <div className={cl.password}>
                  <label> Password </label>
                  <input
                    value={passwordSignIn}
                    onChange={e => setPasswordSignIn(e.target.value)}
                    maxLength="25"
                    type={showPassword ? 'text' : 'password'}
                    required
                  />
                  <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEyeSlash : faEye}
                  />
                </div>
                <div className={cl.buttonAuth}>
                  <button type="submit"> Sign in </button>
                </div>
              </form>
            </div>
          ) : (
            <form className={cl.userData} onSubmit={handleSignUp}>
              <span onClick={() => setIsSignUp(false)} className={cl.btn}>
                {' '}
                Sign in{' '}
              </span>
              <span className={cl.separator}>/</span>
              <span className={`${cl.btn} ${cl.btnAuth}`}> Sign up </span>
              <div className={cl.formGroup}>
                <div className={cl.email}>
                  <label> Email </label>
                  <input
                    className={emailSignUp.includes('@') ? cl.valid : cl.invalid}
                    value={emailSignUp}
                    onChange={e => setEmailSignUp(e.target.value)}
                    maxLength="18"
                    type="email"
                    required
                  />
                </div>
                <div className={cl.password}>
                  <label> Password </label>
                  <input
                    className={passwordSignUp.length >= 3 ? cl.valid : cl.invalid}
                    value={passwordSignUp}
                    onChange={e => setPasswordSignUp(e.target.value)}
                    maxLength="18"
                    type={showPassword ? 'text' : 'password'}
                    required
                  />
                  <FontAwesomeIcon
                    onClick={() => setShowPassword(!showPassword)}
                    icon={showPassword ? faEyeSlash : faEye}
                  />
                </div>
                <div className={cl.name}>
                  <label> Name </label>
                  <input
                    className={name.length >= 3 ? cl.valid : cl.invalid}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    maxLength="18"
                    required
                  />
                </div>
                <div className={cl.buttonAuth}>
                  <button type="submit"> Sign up </button>
                </div>
              </div>
            </form>
          )}
        </div>
      )}
    </>
  )
}
