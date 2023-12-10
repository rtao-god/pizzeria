import MainPage from "@layoutPages/mainPage/MainPage"
import ModalPreview from "@components/food/previewFood/ModalPreview/ModalPreview"
// import Login from "../pages/Login"

export const privateRoutes = [
    { path: '/main', element: <MainPage />, exact: true },
    { path: '/preview/:id', element: <ModalPreview />, exact: true },
]

/* export const publicRoutes = [
    { path: '/login', element: <Login />, exact: true },
] */