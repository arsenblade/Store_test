import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/const'
import {observer} from 'mobx-react-lite'


const NavigationBar = observer(() => {
  const {user} = useContext(Context)
  const navigate =  useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Link style={{color: 'white', textDecoration: 'none'}} to={SHOP_ROUTE}>КупиДейвай</Link>
    {user.isAuth ?
      <Nav className="ml-auto" style={{color: 'white', textDecoration: 'none'}}>
      <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
      <Button variant={'outline-light'} style={{marginLeft: '8px'}} onClick={() => logOut()}>Выйти</Button>
    </Nav>
     :
     <Nav className="ml-auto" style={{color: 'white', textDecoration: 'none'}}>
      <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
    </Nav>
     }
    </Container>
  </Navbar>
  )
})

export default NavigationBar