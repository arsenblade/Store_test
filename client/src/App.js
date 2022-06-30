import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import {BrowserRouter} from 'react-router-dom'
import { Context } from '.';
import { check } from './http/userApi';
import AppRouter from './components/AppRouter';
import NavigationBar from './components/NavigationBar';
import Spinner from 'react-bootstrap/esm/Spinner'


const App = observer( () => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if(loading) {
    return <Spinner animation={"grow"} />
  }
  return (
    <BrowserRouter>
      <NavigationBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
