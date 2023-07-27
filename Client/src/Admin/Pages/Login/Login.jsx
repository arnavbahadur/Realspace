import React, { useState } from 'react'
import './Login.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import AdminBody from '../../AdminBody/AdminBody'

const Login = (props) =>  {
  const history = useNavigate()
  const [ user, setUser] = useState({
      email:" ",
      password:" ",
  })
  // props.setauthentic(true);
  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  async function login() {
    try {
      console.log("login page",user)
      // const { email, password } = user
      await axios.post("/adminapi/login",{"username":user.email,"password":user.password})
      // .then(()=>{props.setauthentic(true)})
      .then((r)=>{console.log(r)})
      .catch((err)=>{alert(err)})
    } catch (err) {
      alert(err);
    }
  }
  return (
  <div className="main">
    <p className="sign" align="center">Log in</p>
    <form className="form1"/>
      <input className="un "  type="text" name="email" value={user.email} placeholder="Your Email"  onChange={ handleChange } align="center"/>
      <input className="pass" align="center" type="password" name="password"
             value={user.password}
              placeholder="Your Password"
               onChange={ handleChange }/>
      <a className="submit" align="center" onClick={()=>{login()}}>Log in</a>   
      {/* <AdminBody/> */}
    </div>
     

  )
}

export default Login


