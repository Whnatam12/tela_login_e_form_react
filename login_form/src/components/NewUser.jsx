import { useState } from 'react'
import './NewUser.css'

const NewUser = () => {

const [name,setName] = useState();
const [email,setEmail] = useState();
const [password,setPassword] = useState();
const [confirmpassword,setComfirmPassword] = useState();

const handlesubmit = (e) => {
e.preventDefault();
console.log(name,email,password,setComfirmPassword);




}



  return (
    <div>
      <div className="container">

     
<div className="new-user-container">
<div className="header">
<h1>Preencha todos os campos</h1>
</div>
  <div className="inputs-container">
<form  onSubmit={handlesubmit} >
<div className="form-control">


  <label>
    <p>Nome</p>
    <input type="text" placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} />
  </label>

  <label>
    <p>Email</p>
    <input type="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} />
  </label>
  
  <label>
    <p>Senha</p>
    <input type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
  </label>
  <label>
    <p>Confirme sua senha</p>
    <input type="password" placeholder='Confirme sua senha'onChange={(e) => setComfirmPassword(e.target.value)}  />
  </label>
  <input className='btn' type="submit"value='Enviar'  />
  </div>
</form>

<a href="http://localhost:5173/">Ja possiu uma conta?</a>
  </div>
</div>


    </div>
    </div>
  )
}

export default NewUser