import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../parts/NavBar';
import Footer from '../parts/Footer';
import StripeCheckout from "react-stripe-checkout";
import toastr from 'toastr';
import "toastr/build/toastr.css";


const DetailsProduct=()=> {














    // const history = useHistory();
    // const [product, setProduct] = useState("");
    // const idPdts=localStorage.getItem('idProduct');


  
  // get all admin and show it in table
  
//   useEffect(()=>{  
//     axios.get(`https://tarekmarket-api.herokuapp.com/Seller/getProductById/${idPdts}`)
//       .then(function (response) {        
//         setProduct(response.data)
//         console.log(product);
      
//       }).catch(function (err) {
//         console.log(err);
//     });    
// },[idPdts])


// // -------------------Parite Exchange currency-------------------

//     const [ToCurrency, setToCurrency] = useState('MAD');

//     let currency = ToCurrency && ToCurrency;

//     const [exchangeRate, setExchangeRate] = useState();

//     useEffect(async()=>{
//       fetch('http://data.fixer.io/api/latest?access_key=afe4bd8abcfd1a927150d247ad43ac84')
//       .then(currencyRes => currencyRes.json())
//       .then(data => {   
//         setExchangeRate(data.rates[currency]);        
//         console.log(data.rates[currency]);        
//       });
    
//       axios.get(`https://tarekmarket-api.herokuapp.com/Seller/getProductById/${idPdts}`)
//       .then(function (response) {        
//         setProduct(response.data)
//         console.log(product);
      
//       }).catch(function (err) {
//         console.log(err);
//     });   
//   },[currency])
// // ------------------- End Parite Exchange currency-------------------


//     function handleToken(token) {
//       axios.post(`https://tarekmarket-api.herokuapp.com/Checkout/checkout`,{token,product})
//       .then(function (response) {
//         const { status } = response.data;
//         console.log("Response:", response.data);

//         if (status === "success") {
//           toastr.success('Success! Check email for details', {
//             positionClass: "toast-top-left",
//         })
//         } else {   
//           toastr.warning('Something went wrong', {
//             positionClass: "toast-top-left",
//         })
//         }
//       }).catch(function (err) {
//         console.log(err);
//     });
//   }
//   return (
      
//         <section className="text-gray-600 body-font">
//           <NavBar/>
//   <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//     <img className="lg:w-1/6 md:w-4/6  mb-10 object-cover object-center rounded" alt="hero" src={product && product.productImg} />
//     <div className="text-center lg:w-2/3 w-full">
//       <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{product && product.titel}</h1>
//       <h3 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">{product && product.category}</h3>
 
//       <p className="mb-8 leading-relaxed w-30">{product && product.description}</p>
//       <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-5">
//       <div className="custom-number-input h-10 w-92">


//           </div>
//           <span className="ml-9 title-font  text-2xl text-red-900">Choose the currency </span>
//           <select onChange={(e)=>setToCurrency(e.target.value)} className="pl-3 inline-block no-underline  hover:text-black" name="" id="">
//                         <option  value='MAD'>MAD</option>
//                         <option  value='EUR'>EUR</option>
//                         <option  value='USD'>USD</option>
//           </select>
//           </div>
           
//       <div className="flex justify-center">
         

//       <span className="title-font font-medium text-2xl text-gray-900">{product && (product.price * exchangeRate).toFixed(0) } {currency}</span>
   
//         <StripeCheckout className="flex ml-auto text-white  bg-blue-500 hover:bg-blue-700 border-0 py-2 px-6 focus:outline-none  rounded"
//                         stripeKey="pk_test_51Ie2vaGvRz5qPQW3UfNV2WP7Ta9g9kRSGF2PGeORp6Y9L1NUOMJFiJgpid7yoPsphADwG9iJJfCtH7PfTWPNafZz00tbA2ntZZ"
//                         titel={product && product.titel}
//                         token={handleToken}
//                         billingAddress
//                         shippingAddress
//                         amount={product && product.price * 100}
//                     />
                    
//       </div>
//     </div>
//   </div>
//   <Footer/>
// </section>

 
return (  
  
  <section className="text-gray-600 body-font overflow-hidden">
    <NavBar/>
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://media-exp1.licdn.com/dms/image/C4E1BAQFtplWIDeS8Kw/company-background_10000/0/1544716027488?e=2159024400&v=beta&t=fF1hZt9KNJfqaqD_PPtz8GSXhmqksmcBi18828qb0mE"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Coca-Cola</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="text-gray-500">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
         
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>G</option>
                <option>M</option>
                <option>M</option>
                <option>P</option>
              </select>
              
         
          <div className="flex ml-6 items-center">
            <span className="mr-3">Quantité</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>G</option>
                <option>M</option>
                <option>M</option>
                <option>P</option>
              </select>
              
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        </div>
          </div>
        
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Ajouter au Panier</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
          
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</section>

  
    )
}
export default  DetailsProduct