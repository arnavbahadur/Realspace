import React, { useState } from 'react'
import './Adminlogin.css';

const Adminlogin = () => {
    const [name, setName] = useState("");
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setName(values => ({...values, [name]: value}))
      }

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('Login')
        // alert(`The name you entered was: ${name}`);
        console.log(name);
      
    }
  return (
    <div>
<div class="login-container">
	<div class="screen">
		<div class="screen__content">
			<form class="login" onSubmit={handleSubmit}>
            <div className="login-text">
            <h2>Login</h2>
            </div>
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" name="username" class="login__input" placeholder="Username / Email "
                    value={name.username || ""} 
                    onChange={handleChange} />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password"  name="password" class="login__input" placeholder="Password" 
                     value={name.password || ""} 
                     onChange={handleChange} />
				</div>
				<button class="button login__submit">
                {/* <input class="button__text" type="submit" /> */}
					<span class="button__text">Submit</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>





{/* {/* 

<div className="login-form">   
<div className="login-heading">
 <h3>Login</h3>    
</div> 
   <form onSubmit={handleSubmit}>
    <div className="title-contain">
        
    <div className="name-title">
      <label>
        <div className="name-text">
        Enter your name:
        </div>
         <input 
           type="text" 
           name="username" 
           value={name.username || ""} 
           onChange={handleChange}
         />
      </label>
    </div>

    <div className="password-title">
      <label>
        <div className="password-text">
        Enter your password:
        </div>
         <input 
            type="text" 
            name="password" 
            value={name.password || ""} 
            onChange={handleChange}
         />
         </label>
    </div>
    
    <div className="submit-title">
        <input type="submit" />
    </div>
   
    </div>
  </form> 

</div> */}

  </div>
  )
}

export default Adminlogin