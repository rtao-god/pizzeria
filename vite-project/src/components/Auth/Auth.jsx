import React, { useRef, useState } from 'react'
import cl from './Auth.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@hooks/localStorage'

export default function Auth({ setAnimation, modalAuth, setModalAuth }) {
    const authorizationRef = useRef(null)

    const btn = useRef(null)

    const emailSignInRef = useRef(null)
    const emailAuthRef = useRef(null)

    const passwordSignInRef = useRef(null)
    const passwordAuthRef = useRef(null)

    const nameRef = useRef(null)

    const [auth, setAuth] = useState(false)

    const [emailSignIn, setEmailSignIn] = useState({ email: "" })
    const [emailAuth, setEmailAuth] = useState({ email: "default@gmail.com" })

    const [passwordSignIn, setPasswordSignIn] = useState({ password: "" })
    const [passwordAuth, setPasswordAuth] = useState({ password: "1234" })

    const [name, setName] = useState({ name: "William" })

    const [arrSave, setArrSave] = useLocalStorage('dataUser', { password: "", email: "", name: "" })

    const email = emailAuth.email.length
    const password = passwordAuth.password.length
    const myName = name.name.length

    const borderYellow = "1px solid yellow"
    const borderGreen = "1px solid green"

    function signIn() {
        if (emailSignIn.email == arrSave.email && passwordSignIn.password == arrSave.password) setModalAuth(false), setAnimation(true)
        else console.log('no no no')
    }

    function saveData() {
        if (passwordAuth.password.length > 2 && myName >= 3 && emailAuth.email.includes("@")) { setArrSave({ password: passwordAuth.password, email: emailAuth.email, name: name.name }) }
        else console.log('nonono')

    }

    const [icons, setIcon] = useState(true)
    const eyeFunc = (x) => {
        if (x === "signIn") {
            const type = passwordSignInRef.current.getAttribute("type") === "password" ? "text" : "password"
            passwordSignInRef.current.setAttribute("type", type)
        } else {
            const type = passwordAuthRef.current.getAttribute("type") === "password" ? "text" : "password"
            passwordAuthRef.current.setAttribute("type", type)
        }
    }

    return (
        <div>
            {modalAuth &&
                <div ref={authorizationRef} className={cl.authorization}>
                    <FontAwesomeIcon onClick={() => setModalAuth(false)} className={cl.closeButton} icon={faXmark} />
                    {!auth
                        ? <div className={cl.userData}>
                            <span ref={btn} className={[cl.btn, cl.btnSignIn].join(' ')}> Sign in </span> <span style={{ fontSize: "29px" }}>/</span>
                            <span ref={btn} onClick={() => setAuth(true)} className={cl.btn}> Sign up </span>
                            <form>
                                <div className={cl.email}>
                                    <label> Email </label>
                                    <input ref={emailSignInRef} value={emailSignIn.email} onChange={e => setEmailSignIn({ ...emailSignIn, email: e.target.value })} minLength="5" maxLength="25" type="email" required />
                                </div>
                                <div className={cl.password}>
                                    <label> Password </label>
                                    <input ref={passwordSignInRef} value={passwordSignIn.password} onChange={e => setPasswordSignIn({ ...passwordSignIn, password: e.target.value })} maxLength="25" type="password" required />
                                    <FontAwesomeIcon onClick={() => { icons ? setIcon(false) : setIcon(true), eyeFunc("signIn") }} icon={icons ? faEyeSlash : faEye} />
                                </div>
                                <div className={cl.buttonAuth}>
                                    <button onClick={() => signIn()}> Sign in </button>
                                </div>
                            </form>
                        </div>
                        : <form className={cl.userData}>
                            <span onClick={() => setAuth(false)} className={cl.btn}> Sign in </span> <span style={{ fontSize: "29px" }}>/</span>
                            <span className={[cl.btn, cl.btnAuth].join(' ')}> Sign up </span>
                            <div>
                                <div className={cl.email}>
                                    <label> Email </label>
                                    <input style={{ border: !emailAuth.email.includes("@") ? borderYellow : borderGreen }} ref={emailAuthRef} value={emailAuth.email} onChange={e => setEmailAuth({ ...emailAuth, email: e.target.value })} maxLength="18" type="email" required />
                                </div>
                                <div className={cl.password}>
                                    <label> Password </label>
                                    <input style={{ border: password < 3 ? borderYellow : borderGreen }} ref={passwordAuthRef} value={passwordAuth.password} onChange={e => setPasswordAuth({ ...passwordAuth, password: e.target.value })} maxLength="18" type="password" required />
                                    <FontAwesomeIcon onClick={() => { icons ? setIcon(false) : setIcon(true), eyeFunc("auth") }} icon={icons ? faEyeSlash : faEye} />
                                </div>
                                <div className={cl.name}>
                                    <label> Name </label>
                                    <input style={{ border: myName < 3 ? borderYellow : borderGreen }} ref={nameRef} value={name.name} onChange={e => setName({ ...name, name: e.target.value })} maxLength="18" required />
                                </div>
                                <div className={cl.buttonAuth}>
                                    <button onClick={() => saveData()}> Auth </button>
                                </div>
                            </div>
                        </form>
                    }
                </div>
            }
        </div>
    )
}