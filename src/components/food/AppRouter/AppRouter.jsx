import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes } from '@router/index'
// import { AuthContext } from '@context/index'
// import Loader from './common/loader/Loader'

export default function AppRouter() {
    /*  const { isAuth, isLoading } = useContext(AuthContext)
     console.log(isAuth)
     if (isLoading) {
         return <Loader />
     } */

    return (
        <>
            {/* {isAuth
                ? */}
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/main" replace />} />
            </Routes>
            {/* : */}
            {/* <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
            </Routes> */}
            {/* } */}
        </>
    )
}