import React, { useEffect, useState } from 'react'
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
  
  const handleChange = e => {
      const { name, value } = e.target
      setUser({
          ...user,
          [name]: value
      })
  }
  
  // const [authentic, setauthentic] = useState(false);
  //     useEffect(() => {
  //        axios.get("/adminapi/isauth")
  //       .then((res)=>{setauthentic(res.data)});
  //     }, [])


  async function login() {
    try {
      // console.log("login page",user)
      // const { email, password } = user
      await axios.post("/adminapi/login",{"username":user.email,"password":user.password})
      // await axios.post("/adminapi/login",user)
      // .then(()=>{props.setauthentic(true)})
      .then((r)=>{history("/AdminBody")})
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
    </div>
     
  )
}

export default Login











  
