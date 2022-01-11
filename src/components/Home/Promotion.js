import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import Navbar from '../parts/NavBar'
import Footer from '../parts/Footer';
import promotion from '../images/promotion.png'
import NoPromo from '../images/noPromo.jpg'
const Promotion=()=> {

    const [products, setProducts] = useState();
    const [promo, setPromo] = useState();
    const id=localStorage.getItem('idCategory');
  
  useEffect(()=>{
  
    axios.get(`http://localhost:5050/productPromo/getAllProductPromo`)
      .then(function (response) {
          
        setProducts(response.data)
        setPromo(response.data.length)
      }).catch(function (err) {
        console.log(err);
    });
    
    })

    

    return (
        <section className="text-gray-600 body-font ">
        <Navbar/>
        {promo > 0  && 
 <div className="container px-5 py-24 mx-auto">
  <img src={promotion} style={{width:'34%',marginLeft:'26%',marginTop:'-13%',position:'absolute'}}/>
  <div className="flex flex-wrap -m-4">
  { products && products.map(item =>(
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.productImg} style={{borderRadius:"30px",height:'220px'}} />
      </a>
      <div className="mt-4">
       <Link ><h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category.nameCategorie}</h2></Link> 
        <Link ><h2 className="text-gray-900 title-font text-lg font-medium">{item.titel}</h2></Link>
        <p className="mt-1" style={{color:'red',textDecoration:'line-through'}}>{item.oldPrice} DH</p>
        <h1 style={{fontSize:'33px',color:'black'}}>{item.newPrice} DH</h1>
        <div className="flex items-center gap-4 my-6 cursor-pointer ">
              <div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">Add to bag</div>
          </div>
      </div>
    </div>
  ))}
  </div>
</div>
}
{promo == 0  && 
  <img src={NoPromo} style={{width:'40%',marginTop:'2%',marginLeft:'30%'}} />
}
<Footer/>
</section>
  )
}
export default Promotion 