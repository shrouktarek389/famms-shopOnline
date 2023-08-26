import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Test from './components/Test';
import Login from './components/Login';
import {useState} from 'react';
import Logout from './components/Logout';
import Success from './components/Success';




function App() {
  const [user,setUser]= useState([])

  return (
    <div className='App'>
            <BrowserRouter>

        <Nav user={user}/>

     <Routes>

     <Route path='/' element={<Home />}/>
     <Route path='/About' element={<About />}/>
     <Route path='/Login' element={<Login setUser={setUser} />}/>
     <Route path='/Logout' element={<Logout setUser={setUser} />}/>
     <Route path='/Success' element={<Success />}/>
     <Route path='/Products' element={<Products />}/>
     <Route path='/Contact' element={<Contact />}/>
     <Route path='/Test' element={<Test />}/>

     </Routes>

        <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
