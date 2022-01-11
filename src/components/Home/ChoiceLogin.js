import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

const ChoiceLogin =()=> {
    return (
        
   <section class="text-gray-600 body-font bg-gray-300" style={{marginTop:'8%'}}>
     <h2 style={{textAlign:"center",fontSize:"40px",color:"black",marginTop:"5%"}}>Login</h2>
   <div class="container px-5 py-24 mx-auto">
     <div class="flex flex-wrap -m-4 mt-5">
       <div class="p-4 lg:w-1/2 mt-5">
         <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
         <Link to ='/loginFournisseur' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  mt-4 hover:bg-black-700 lg:mt-0">
           FORNISSUER
        </Link>
          
         </div>
       </div>
       <div class="p-4 lg:w-1/2 mt-5">
         <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
         <Link to='/loginCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  mt-4 hover:bg-black-700 lg:mt-0">
             EPICIER
        </Link>
        
         </div>
       </div>
       <Link to='/signInCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0" style={{marginLeft:690,width:165}} >
        Create an account
        </Link>
     </div>
   </div>
 </section>
    )
}

// <div className="min-h-screen   flex flex-col justify-center sm:py-12">
//           <h1 className="font-bold text-black text-center text-2xl mb-5">Se connecter </h1> 
//     <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md bg-white shadow w-full rounded-lg divide-y divide-gray-200 justify-center">
 
//         <Link to ='/loginSeller' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  lg:mt-0">
//              FOURNISSEUR
//         </Link>
//         <Link to='/loginCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  lg:mt-0" style={{marginLeft:190}}>
//              EPICI
//         </Link>
//         </div>
//         <Link to='/compte' className="rounded px-3 py-2 m-1  shadow-lg font-bold  lg:mt-0" style={{marginLeft:876,width:165}} >
//         Creer un compte
//         </Link>
  
    


// </div>

  
//     )
// }
    
export default ChoiceLogin