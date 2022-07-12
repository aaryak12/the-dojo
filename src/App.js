import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//styles
import './App.css'

//pages and components
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Create from './pages/Create/Create'
import Project from './pages/Project/Project'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import OnlineUsers from './components/OnlineUsers'

function App() {
  const { user, authIsReady } = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                {user && <Dashboard />}
                {!user && <Redirect to = '/login' />}
              </Route>
              <Route path ='/create'>
                {!user && <Redirect to = '/login' />}
                {user && <Create />}
              </Route>
              <Route path ='/projects/:id'>
                {!user && <Redirect to = '/login' />}
                {user && <Project />}
              </Route>
              <Route path ='/login'>
                {!user && <Login />}
                {user && <Redirect to = '/' />}
              </Route>
              <Route path ='/signup'>
                {!user && <Signup />}
                {user && <Redirect to = '/' />}
              </Route>
            </Switch>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
