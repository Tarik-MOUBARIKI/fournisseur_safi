import React, { useState } from 'react';
import {Link,useHistory } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";


const LoginFournisseur=()=> {

    const history = useHistory();

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();



    const handleSubmit = (e) => {
		e.preventDefault();

	const Fournisseur = {login,password};

	axios.post(`http://localhost:5050/fournisseur/login`,Fournisseur)
		.then(res => {

      if(!res.data.message){ 
       let status= res.data.status;

        if(status === "InActive"){
          toastr.error('This Account is not activated! Yet please contact us if you have any problem')
        }else if (status === "Block"){
        toastr.error('This Account is Blocked! please contact us if you have any problem')
      }else{
        let token= res.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("fournisseur", login);
        // console.log(res.data.id);
        localStorage.setItem("idF",res.data.id);
        history.push('/dashboardFournisseur');
        toastr.success('authenticated SuccessFully')
      }


    }
      else(

      // Calling toast method by passing string 
      toastr.warning(res.error, 'Username Or password invalid !!!! Please Check form !') 
      )

        })
    }



    return (
 <div>

  <div className="h-screen font-sans login bg-cover">
    <div className="container mx-auto h-full flex flex-1 justify-center items-center">
      <div className="w-full max-w-lg">
        <div className="leading-loose">
          <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"  onSubmit={handleSubmit}>
            <p className="text-black font-medium text-center text-lg font-bold">FOURNISSEUR </p>
            <div className="mt-10">
          
              <input className="w-full px-5 py-1 text-black bg-gray-300 rounded focus:outline-none focus:bg-white" type="text"  placeholder="enter login"
               required 
               value={login} 
               onChange={e => setLogin(e.target.value)}/>
            </div>
            <div className="mt-10">
           
              <input className="w-full px-5 py-1 text-black bg-gray-300 rounded focus:outline-none focus:bg-white" type="password" id="password" placeholder="enter password" arial-label="password"
               required 
               value={password} 
               onChange={e => setPassword(e.target.value)}/>
            </div>
            <div className="mt-7 items-center flex justify-between">
              <button className="px-8 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded" type="submit">login</button>
            </div>
            <div className="text-center">
              <Link to='/signIn' className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400">
                don't have an account ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</div>


    )
}
export default  LoginFournisseur