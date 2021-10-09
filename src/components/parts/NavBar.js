import React,{useEffect,useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'

export default function NavBar() {

  const token=localStorage.getItem('token');
  const history = useHistory();
  const login=localStorage.getItem('Epicier');

  const logOut =()=>{

      localStorage.removeItem('token')
      localStorage.removeItem('role')
      localStorage.removeItem('idEpicier')
      localStorage.removeItem('idCategory')
      localStorage.removeItem('Epicier')
         history.push('/loginCustomer');
      }
      const cart =()=>{
        history.push('/detailsProduct');
      }

    return (



<nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
  <div className="mb-2 sm:mb-0">
    <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark"><img src={logo} style={{width:"20%"}}/></a>
  </div>

{token  && <>

    <div className="flex ">
    <Link onClick={cart}  className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="" />
      </svg>
      Ma Facture
    </Link>

      <Link onClick={logOut} className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="h- w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
      </svg>
        Log out</Link>
        
      <span className=" block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold  mt-4 lg:mt-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
            </svg>
        {login}
      </span>
    </div>
      </>
  
   }
   { !token  && <>    
      <div className="flex ">
       <Link to='/compte' className="block text-md px-4 py-2 rounded text-red-700 ml-2 font-bold hover:text-white mt-4 hover:bg-black lg:mt-0">Sign up</Link>
       <Link to='/choiceLogin' className=" block text-md px-4  ml-2 py-2 rounded text-red-700 font-bold hover:text-white mt-4 hover:bg-black lg:mt-0">Sign in </Link>      
      </div>
    </>
}
</nav>

)
}

