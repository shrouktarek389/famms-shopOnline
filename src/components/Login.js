import React from 'react'
import {useState} from 'react';
import {useLocation,useNavigate} from 'react-router-dom'

function Login(props) {
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const chk = async ()=>{
        if(email == ""){
            alert("Please Enter an email")
            return
        }
        if(password == ""){
            alert("Please Enter a password")
            return
        }
        
        const res = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
        const data = await res.json()
        if(data.length > 0){
            props.setUser(data[0])
            navigate('/success')
        }
        else{
            alert("error")
        }
        
    }

  return (
    <div className='mainContents'>
        <div className='form-group'>
        <label>Email :</label>
        <input
        type="text"
        placeholder="enter your email"
        className='form-control'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
      
        <div className='form-group'>
        <label>Password :</label>
        <input
        type="password"
        placeholder="enter your password"
        className='form-control'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </div>

        <div className='form-group'>
        <button type='button' onClick={()=>chk()} className='btn btn-primary'>Login</button>
        </div>
    </div>
  )
}

export default Login
