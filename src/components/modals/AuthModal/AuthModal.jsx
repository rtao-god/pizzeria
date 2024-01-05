import { useState } from 'react'
import styles from './AuthModal.module.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useLocalStorage } from '@all/hooks/localStorage'

export default function AuthModal({ isOpen, setIsOpen }) {
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
            setIsOpen(false)
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
            {isOpen && (
                <div className={styles.authorization}>
                    <FontAwesomeIcon onClick={() => setIsOpen(false)} className={styles.closeButton} icon={faXmark} />
                    {!isSignUp ? (
                        <div className={styles.userData}>
                            <span className={`${styles.btn} ${styles.btnSignIn}`}> Sign in </span>
                            <span className={styles.separator}>/</span>
                            <span onClick={() => setIsSignUp(true)} className={styles.btn}>
                                {' '}
                                Sign up{' '}
                            </span>
                            <form onSubmit={handleSignIn}>
                                <div className={styles.email}>
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
                                <div className={styles.password}>
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
                                <div className={styles.buttonAuth}>
                                    <button type="submit"> Sign in </button>
                                </div>
                            </form>
                        </div>
                    ) : (
                        <form className={styles.userData} onSubmit={handleSignUp}>
                            <span onClick={() => setIsSignUp(false)} className={styles.btn}>
                                {' '}
                                Sign in{' '}
                            </span>
                            <span className={styles.separator}>/</span>
                            <span className={`${styles.btn} ${styles.btnAuth}`}> Sign up </span>
                            <div className={styles.formGroup}>
                                <div className={styles.email}>
                                    <label> Email </label>
                                    <input
                                        className={emailSignUp.includes('@') ? styles.valid : styles.invalid}
                                        value={emailSignUp}
                                        onChange={e => setEmailSignUp(e.target.value)}
                                        maxLength="25"
                                        type="email"
                                        required
                                    />
                                </div>
                                <div className={styles.password}>
                                    <label> Password </label>
                                    <input
                                        className={passwordSignUp.length >= 3 ? styles.valid : styles.invalid}
                                        value={passwordSignUp}
                                        onChange={e => setPasswordSignUp(e.target.value)}
                                        maxLength="25"
                                        type={showPassword ? 'text' : 'password'}
                                        required
                                    />
                                    <FontAwesomeIcon
                                        onClick={() => setShowPassword(!showPassword)}
                                        icon={showPassword ? faEyeSlash : faEye}
                                    />
                                </div>
                                <div className={styles.name}>
                                    <label> Name </label>
                                    <input
                                        className={name.length >= 3 ? styles.valid : styles.invalid}
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        maxLength="25"
                                        required
                                    />
                                </div>
                                <div className={styles.buttonAuth}>
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
