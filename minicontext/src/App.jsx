import './App.css'
import Profile from './Components/Profile'
import Login from './Components/Login'
import UserContextprovider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextprovider>
     <h1>React with ak </h1>
     <Login />
     <Profile />
    </UserContextprovider>
  )
}

export default App
