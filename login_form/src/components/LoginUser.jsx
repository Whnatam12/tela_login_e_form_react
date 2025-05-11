import React from 'react'
import './LoginUser.css'
import { useState } from 'react'



const LoginUser = () => {

const [email,setEmail] = useState();
const [password,setPassword] = useState();

const handleemail = (e) =>{
  
  setEmail(e.target.value);

}

const handlpassword = (e) =>{
  
  setPassword(e.target.value);

}
const handlesubmit = (e) => {
  e.preventDefault();
  console.log(email,password);
};


  return (
    <div className='login-container'>
  <h1>Digite seu email e senha</h1>
        <div className="inputs-container">
{/* <h1>Entrar</h1> */}
<form  onSubmit={handlesubmit}>

    <div className="form-control">
    
     <label>
    <p>E-mail</p>
    <input type="text"
         name="email"
         placeholder='Digite seu email'
         required
         onChange={handleemail}
         />
</label> 



  </div>
<div className="form-control">

<label >
<p>Senha</p>
        <input type="password"
         name="password" 
         placeholder='Digite sua senha'
         required
         onChange={handlpassword}
         />
      </label> 


      <input className='btn' type="submit"value="Entrar" />

</div>

</form>
<div className="google">
<a href="#"> <img src="/google.png" alt="" /><span >Continuar com o google</span></a>
</div>
<div className="recovery-password">
<a  href="#"><span>Esqueceu sua senha?</span></a>
</div>
  
      <div className="new-account">
      <a href="http://localhost:5173/newuser"><span>CRIAR UMA CONTA NOVA</span></a>
      </div>
</div>


    </div>
  )
}

export default LoginUser