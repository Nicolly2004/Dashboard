import {createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Dashboard from './pages/Dashboard'

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registro",
    element: <Registro/>
  },{
    path: "/dashboard",
    element: <Dashboard/>
  }
])