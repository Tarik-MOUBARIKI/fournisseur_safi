import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import background from "../images/A.jpg";

const Compte =()=> {
    return (

   <section class="text-gray-600 body-font" style={{marginTop:'8%'}}>
   <div class="container px-5 py-24 mx-auto">
     <div class="flex flex-wrap -m-4 mt-5">
       {/* <div class="p-4 lg:w-1/2 mt-5">
         <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
         <Link to ='/signIn' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  mt-4 hover:bg-black-700 lg:mt-0">
           FORNISSUER
        </Link>
          
         </div>
       </div> */}
       <div class="p-4 lg:w-1/2 mt-5">
         <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
         <Link to='/signInCustomer' className="rounded px-3 py-2 m-1 border-b-4 border-l-2 shadow-lg font-bold  mt-4 hover:bg-black-700 lg:mt-0">
             EPICIER
        </Link>
         </div>
       </div>
       
     </div>
   </div>
 </section>
    )
}
export default Compte