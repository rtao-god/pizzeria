import MainPage from '@all/pages/MainPage/MainPage'
import PreviewFood from '@/food/previewFood/PreviewFood/PreviewFood'
// import Login from "../pages/Login"

export const privateRoutes = [
  { path: '/main', element: <MainPage />, exact: true },
  { path: '/preview/:id', element: <PreviewFood />, exact: true },
]

/* export const publicRoutes = [
    { path: '/login', element: <Login />, exact: true },
] */
