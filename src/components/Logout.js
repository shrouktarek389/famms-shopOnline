import React from 'react'
import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

function Logout(props) {
  let location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        props.setUser([])
        setTimeout(() => {
          if(location.pathname=="/logout"){
            navigate('/')
          }
            
        }, 3000);
    },[])
  return (
    <div className='mainContents'>
      <div className='alert alert-success' >You logged out successfully!</div>
      
    </div>
  )
}

export default Logout
