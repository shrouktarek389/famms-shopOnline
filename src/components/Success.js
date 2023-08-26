import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

function Success() {
  const location = useLocation()
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(() => {
          if(location.pathname=="/success"){
            navigate('/')
          }
           
        }, 3000);
    },[])

  return (
    <div className='mainContents'>
      <div className='alert alert-success'>Logged in successfully!</div>
    </div>
  )
}

export default Success
