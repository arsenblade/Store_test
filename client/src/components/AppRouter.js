import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Context } from '../index'
import {authRoutes, publicRoutes} from '../Routes'

const AppRouter = () => {
  const {user} = useContext(Context)
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
      {publicRoutes.map(({path, Component}) => <Route key={path} path={path} element={<Component />}/>)}
    </Routes>
  )
}

export default AppRouter