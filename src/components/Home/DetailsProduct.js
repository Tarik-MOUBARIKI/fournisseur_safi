import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../parts/NavBar';
import Footer from '../parts/Footer';
import toastr from 'toastr';
import "toastr/build/toastr.css";


const DetailsProduct=()=> {

  const [cart, setCart] = useState();
  // const [img, setImg] = useState();

  const id=localStorage.getItem('idEpicier');
console.log(id);
// get all sellers 

  useEffect(()=>{

    axios.get(`http://localhost:5050/cart/getCart/${id}`)
      .then(function (response) {
          
        setCart(response.data)
        console.log(response.data)
      }).catch(function (err) {
        console.log(err);
    });
    
    },[id])


 
return (  
  
  <section className="text-gray-600 body-font overflow-hidden">
    <NavBar/>
  <div className="container px-5 py-24 mx-auto">
  <div className="w-full">
    <Link to='/product' class="bg-blue-300 hover:bg-green-100 text-black font-bold py-2 px-4 rounded-100">Commande More</Link>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600  text-sm leading-normal">
              <th className="py-3 px-6 text-left">image Product</th>
              <th className="py-3 px-6 text-center">name</th>              
              <th className="py-3 px-6 text-center">Price</th>
              <th className="py-3 px-6 text-center">Quantity</th>
              <th className="py-3 px-6 text-center">Type</th>
              {/* <th className="py-3 px-6 text-center">Actions</th>  */}
            </tr>
          </thead>
   { cart && cart.map(item =>(
          <tbody className="text-gray-600 text-sm font-light">


            <tr className="border-b border-gray-200 hover:bg-gray-100">

              {/* { <td className="py-3 px-6 text-left whitespace-nowrap">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.product.productImg} style={{borderRadius:"10px", width:"150px",height:"100px"}}/>

          
              </td> }
              <td className="py-3 px-6 text-center">
              {item.product.titel}
              </td>
              <td className="py-3 px-6 text-center">
              {item.product.price}DH
              </td> */}
              <td className="py-3 px-6 text-center">
              {item.quantity}
              </td>
              <td className="py-3 px-6 text-center">
              {item.type}
              </td>
              {/* <td className="py-3 px-6 text-center"> */}

                {/* <div className="flex item-center justify-center">               
                  <Link onClick={()=>getIdFournisseur(item._id)}  className="w-4 mr-2 transform hover:text-yellow-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </Link>
                  <Link    onClick={()=>deleteFournisseur(item._id)}  className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                 
                  </Link>
                </div> */}

              {/* </td> */}

            </tr>
          </tbody>
           ))}  
        </table>
      </div>
    </div>
  </div>
  <Footer/>
</section>

  
    )
}
export default  DetailsProduct