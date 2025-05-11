
import './App.css'
import NewUser from './components/NewUser'
import LoginUser from './components/LoginUser'
function App() {


  return (
<div className="app">

  <div className="container">
  <div className="header">
  {/* <h1>Digite seu email e senha</h1> */}
  </div>
  <div className="form-container">

    <div className="form-login">
    <LoginUser/>
    </div>
  </div>
  </div>
</div>

  )
}

export default App
