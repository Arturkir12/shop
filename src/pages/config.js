import AuthLayouts from "../layouts/AuthLayouts";
import Home from "./Home";
import Login from "./Login";


const config = [
    {
        element: <Home />,
        path: '/',
        Layout: AuthLayouts
    },
    {
        element: <Login />,
        path: '/login',
        Layout: AuthLayouts
    }
]


export default config