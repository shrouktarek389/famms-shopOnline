import React from 'react'
import {useLocation,Link} from 'react-router-dom'


function Nav(props) {
   let location = useLocation();
  return (
    <div>
        <header className="header_section">
            <div className="container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
                  <a className="navbar-brand" href="index.html"><img width="250" src="images/logo.png" alt="#" /></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown active">
                           <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"> <span className="nav-label">Pages <span className="caret"></span></span></a>
                           <ul className="dropdown-menu">
                              <li><a href="/About">About</a></li>
                              <li><a href="/Test">Testimonial</a></li>
                           </ul>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/Products">Products</a>
                        </li>
                        
                        <li className="nav-item">
                           <a className="nav-link" href="/Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">
                              
                           </a>
                        </li>
                        <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                           <i className="fa fa-search" aria-hidden="true"></i>
                           </button>
                        </form>
                        {props.user.id==null?
      <li className={`nav-item ${location.pathname == "/login" && 'active'}`}>
        <Link className="nav-link" to="/login"><span className="fas fa-question-user"></span>Login</Link>
      </li>
      :
       <li className={`nav-item ${location.pathname == "/logout" && 'active'}`}>
        <Link className="nav-link" to="/logout"><span className="fas fa-question-user"></span>Logout</Link>
      </li>
      }
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
    </div>
  )
}

export default Nav