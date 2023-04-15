import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registro",
    element: <Registro/>
  }
])