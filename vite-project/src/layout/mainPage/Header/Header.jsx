import React, { useState } from 'react'
import cl from "./Header.module.sass"
import "@assets/beermoney/beermoney.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faGift, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import Auth from '@components/Auth/Auth'

export default function Header() {
  const [modalAuth, setModalAuth] = useState(false)
  return (
    <div className={cl.header}>
      <a href="#">
        <svg className={cl.pizzaHutLogo}>
          <g>
            <path d="M 1.4 17.58 c 0.02 0.39 0.04 0.68 0.1 0.97 c 0.03 0.14 -0.06 0.45 -0.44 0.38 c -0.21 -0.04 -0.42 -0.12 -0.58 -0.26 c -0.17 -0.14 -0.26 -0.35 -0.32 -0.55 c -0.13 -0.47 -0.42 -1.9 0.46 -1.88 c 0.2 0 0.37 0.09 0.49 0.24 C 1.34 16.79 1.38 17.22 1.4 17.58 M 25.49 11.64 c 0 0 -0.85 -7.05 -6.9 -8.96 c -3.38 -1.07 -5.06 -0.74 -7.13 -0.38 C 9.02 2.73 6.11 3.76 4.01 5.55 c -1.43 1.22 -2.88 3.07 -3.43 5.39 c -0.3 1.26 -0.33 2.47 -0.1 3.79 c 0.08 0.48 0.76 0.92 0.77 0.14 C 1.32 6.2 8.46 4.58 8.71 4.53 C 8.81 4.51 8.9 4.5 8.98 4.48 c 0.11 -0.03 0.24 -0.05 0.35 -0.03 c 0.06 0.01 0.12 0.13 0.02 0.18 c -0.57 0.27 -2.79 1.03 -4 2.09 C 4.11 7.78 2.51 9.51 2 12.5 c -0.09 0.51 -0.17 3.16 0.08 5.02 c 0.14 1.07 0.87 2.52 1.36 3.14 c 1.31 1.67 3.57 3.1 4.8 3.54 c 0.78 0.28 1.74 0.36 2.22 0.48 c 0.17 0.04 0.15 0.25 -0.02 0.28 c -0.78 0.13 -2.67 -0.31 -4.24 -1.08 c -1.17 -0.58 -1.98 -1.37 -2.77 -2.22 c -0.87 -0.94 -1.33 -1.92 -1.66 -1.85 c -0.53 0.11 -0.08 1.24 0.15 1.68 c 0.8 1.5 2.41 2.8 3.21 3.23 c 2.5 1.37 5.03 1.4 6.18 1.3 c 4.92 -0.41 7.94 -2.78 9.29 -4.63 c 0.78 -1.08 2.54 -3.37 2.5 -6.71 c 0 -0.53 0.04 -4.23 -1.17 -6.16 c -0.27 -0.44 -1.1 -2.24 -4.23 -3.78 c -0.24 -0.12 -1.31 -0.66 -2.18 -0.68 c -0.37 -0.01 -1.11 -0.04 -1.04 -0.48 c 0.05 -0.31 1.87 0.1 2.06 0.15 c 1.31 0.36 2.99 1.37 4.16 2.26 c 3.62 2.76 3.25 8.61 3.25 8.61 c -0.15 6.22 -3.79 8.85 -6.41 10.41 c -0.05 0.03 -0.24 0.27 -0.18 0.36 c 0.06 0.09 0.19 0.08 0.31 0.07 c 1 -0.1 1.98 -0.85 2.82 -1.5 c 4.31 -3.38 4.53 -6.02 4.77 -7.02 C 25.63 15.48 25.65 12.55 25.49 11.64" fill="rgb(200, 16, 46)"></path>
            <path d="M18.9,13.31c-0.13-0.05-0.24-0.09-0.33-0.13c-0.33-0.13-1.14-0.35-1.79-0.52c-0.36-0.1-0.73-0.19-0.8-0.22 c-0.07-0.11-0.23-0.79-0.3-1.12c-0.04-0.17-0.07-0.3-0.09-0.36c-0.06-0.21-0.13-0.32-0.34-0.3c0,0-0.01,0-0.02,0 c-0.07,0.01-1.04,0.25-2.62,0.66c-1.06,0.27-2.16,0.55-2.23,0.56c-0.09,0.01-0.14,0.06-0.83,1.14c-0.21,0.32-0.46,0.73-0.5,0.77 c-0.02,0.02-0.17,0.08-0.33,0.15c-0.44,0.2-1.26,0.58-1.96,0.98C6,15.38,4.51,16.32,4.4,16.53c-0.04,0.08-0.04,0.16,0,0.22 c0.05,0.08,0.17,0.13,0.31,0.11c0.03,0,0.06-0.01,0.1-0.02c0.15-0.04,4.85-0.98,7.55-1.42c0.67-0.11,1.53-0.22,2.53-0.33 c2.47-0.26,4.96-0.4,5.11-0.39c0.15,0.02,0.29-0.04,0.39-0.16c0.08-0.09,0.13-0.21,0.12-0.33C20.51,13.98,19.99,13.74,18.9,13.31" fill="#FFFFFF"></path>
            <path d="M33.66,15.3c0.42-0.46,1.15-0.37,1.79-0.55c1.12-0.31,2.88-1.13,2.83-2.56c-0.04-1.25-1.25-1.98-2.66-2.2 c-1,3.4-2.67,6.44-4.26,9.4c-0.48,0.9-0.96,2.22-2.21,2.32c-0.62-0.53-0.41-1.31-0.31-1.86c0.28-1.61,1.03-3.35,1.69-4.74 c0.92-1.97,2.2-3.8,3.49-5.21c-0.58,0.02-0.95,0.1-1.38-0.17c-0.38-1.65,1.36-2,2.55-2.08c2.76-0.17,5.54,1.4,5.47,4.23 c-0.06,2.3-2.53,3.8-4.87,3.99C35.13,15.93,34.12,16.01,33.66,15.3 M74.13,13.26c0.42-0.82,0.7-1.56,1.15-2.57 c0.2-0.45,1.31-2.48,0.25-2.74c-0.02,0-0.06-0.01-0.08,0c-1.79,0.5-3.08,3.94-4.19,5.37c-1.37-0.03-3.04-0.14-2.97,0.86 c0.06,0.82,1.26,0.98,1.95,1.38c-0.26,0.8-1.79,4.01-0.48,4.83c1.37,0.86,2.09-1.15,2.4-2c0.39-1.06,0.68-2.01,1.13-2.81 c1.08-0.08,2.27-0.45,3.16-0.46c-0.24,0.94-0.76,2.25-0.19,3.46c1,0.64,1.75-0.06,2.1-0.71c0.56-1.03,0.64-2.87,1.05-3.7 c0.65-0.39,1.66-0.43,1.81-1.28c-0.37-0.36-0.95,0.01-1.44-0.01c0.13-0.68,0.47-1.39,0.71-2.09c0.23-0.69,0.68-1.54,0.13-2.26 c-1.12,0.19-1.6,1.21-2.07,2c-0.52,0.87-0.95,1.81-1.46,2.65C76.09,13.21,75.19,13.32,74.13,13.26 M46.27,8.22 c-1.22-0.4-3.23,0.56-3.88,1.5c-0.42,0.61-0.56,1.8,0.25,2.02c1.01,0.28,1.78-0.88,2.21-1.35C45.51,9.67,46.09,9.17,46.27,8.22 M93.05,9.94c-0.99-0.26-1.4,0.5-1.98,1.19c-0.47,0.56-0.75,1.12-1.02,1.2c-0.66,0.2-1.7-0.42-2.26-0.26 c-0.19,0.05-0.5,0.31-0.51,0.64c-0.02,0.86,1.02,0.99,1.87,1.3c-0.37,0.81-0.86,1.8-1.12,2.89c-0.24,1.01-0.51,2.49,0.05,3.55 c0.69-0.11,0.85-0.93,1.08-1.44c0.8-1.77,1.54-3.62,2.54-5.14c1.56-0.11,3.17-0.54,4.41-0.85c0.44-0.11,1.07-0.07,1.23-0.56 c-0.32-0.38-0.95-0.25-1.46-0.25c-1.22-0.02-2.53,0.07-3.35,0.05C92.81,11.66,93.65,10.91,93.05,9.94 M60.25,15.74 c0.3-1.21,1.39-1.68,2.64-2c0.34,0.01-0.15,0.36-0.11,0.56c-0.08,0.22-0.2,0.41-0.18,0.72C61.82,15.27,61.28,15.73,60.25,15.74 M53.94,16.82c0.73-0.66,1.32-1.3,2.15-2.08c0.56-0.53,2.06-1.44,1.63-2.57c-0.23-0.61-1.3-0.74-2.06-0.74 c-1.09,0-2.47,0.34-3.58,0.3c-0.39-0.01-0.75-0.33-1.05-0.09c-1.01,2.11,2.18,1.97,3.75,1.8c-1.13,1.23-3.13,1.97-4.12,3.35 c-0.26,0.36-0.59,0.93-0.35,1.53c0.42,0.34,0.9,0.11,1.37,0.09c2.1-0.06,4.51,0.63,6.07-0.11c0.32-0.15,0.52-0.43,0.83-0.64 c1.91,0.61,3.27-0.48,4.39-1.1c0.68,0.91,3.43,0.97,3.66-0.22c-0.44-0.74-1.63-0.32-1.85-1.14c-0.23-0.85,1.22-2.07,0.31-2.98 c-0.35-0.24-0.74,0.13-0.96-0.01c-2.74-0.34-5.6,1.15-6.3,3.18c-0.19,0.54-0.05,1.22,0.06,1.69 C56.72,17.57,55.22,16.99,53.94,16.82 M42.79,12.55c-0.37-0.17-0.53-0.06-0.71,0.16c-1.12,1.36-3.68,3.48-3.45,5.7 c0.08,0.79,0.54,1.8,1.56,1.46c0.3-0.27,0.18-0.62,0.32-0.97C41.33,16.9,43.7,15.49,42.79,12.55 M50.36,13.17 c-0.92-0.33-2.48-0.12-3.85-0.19c-1.23-0.07-2.83-0.51-2.75,0.54c0.09,1.25,2.61,1.12,3.92,1c-0.93,0.86-2.02,1.69-3.07,2.56 c-0.91,0.76-2.58,1.66-2.12,3.37c1.03,0.58,2.24,0,3.6-0.05c2.55-0.09,4.73,0.67,7.16,0.46c0.95-0.08,2.44-0.4,2.36-1.43 c-0.54-0.32-1,0.01-1.51,0.07c-2.49,0.26-4.84-1.13-7.68-0.94c0.73-0.76,1.69-1.52,2.53-2.32C49.7,15.49,50.83,14.57,50.36,13.17 M82.25,17.67c0.33-0.95,0.73-3.14-0.61-3.47c-0.46-0.11-1.08,0.02-1.41,0.31c0,0.5,0.55,0.39,0.55,0.89 c-0.34,1.01-1.78,2.9-0.55,4.03c1.1,1.01,2.91-0.2,3.47-0.62c0.42-0.31,0.79-0.74,1.13-0.8c0.13,1.29,0.63,2.19,1.8,2.35 c0.35-0.38,0.05-0.8,0.05-1.29c0-0.77,0.27-1.66,0.44-2.41c0.18-0.8,0.63-1.67,0.04-2.42c-0.69-0.15-0.99,0.43-1.29,0.79 C84.9,16.21,83.84,17.11,82.25,17.67"></path>
            <path d="M130.61,10.24c-1.14-4.19-4.59-8.03-9.22-8.26c-5.1-0.2-10.66,1.21-13.86,6.51 c-4.05,6.54,0.07,16.81,8.11,17.48C125.4,26.87,133.17,20.47,130.61,10.24z" fill="#DA1A31"></path>
            <path d="M111.62,15.68l0.15,0.9c2.49-1.18,5.44-2.29,8.84-3.05c0.86-0.19,1.7-0.35,2.52-0.48 c-0.46-0.87-0.77-1.45-1.24-2.33c-0.92,0-2.8,0.61-3.46,0.88C115.4,12.86,114.78,13.38,111.62,15.68z" fill="#FFFFFF"></path>
            <text x="140" y="20" style={{ fontSize: "30px", fontFamily: 'Beer money' }}> PizzaH </text>
          </g>
        </svg>
      </a>

      <div className={cl.headerTop}>

        <div className={cl.container}>
          <a href="#">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> Moscow </span>
          </a>
        </div>
        <div className={cl.container}>
          <a href="#"><span> Delivery area </span></a>
        </div>
        <div className={cl.container}>
          <a href="#"> <FontAwesomeIcon icon={faPhone} />
            <span> Order by phone </span>
          </a>
        </div>

        <div className={cl.containerRight}>
          <div className={cl.container}>
            <a href="#">
              <FontAwesomeIcon style={{ color: "rgb(112, 164, 1)" }} icon={faGift} />
              <span> Points </span>
            </a>
          </div>
          <div className={cl.container} onClick={() => setModalAuth(true)}>
            <a href="#">
              <FontAwesomeIcon style={{ color: "rgb(112, 164, 1)" }} icon={faArrowRightToBracket} />
              <span> Sign in </span>
            </a>
          </div>
        </div>
        {modalAuth
          ? <Auth modalAuth={modalAuth} setModalAuth={setModalAuth} />
          : null
        }

      </div>
    </div>
  )
}
