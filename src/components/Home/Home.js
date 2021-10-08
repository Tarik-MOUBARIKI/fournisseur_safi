import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import Navbar from '../parts/NavBar'
import Footer from '../parts/Footer';
import promo from '../images/promo.png'
const Home=()=> {

  const history = useHistory();
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();

  useEffect(()=>{

    axios.get(`http://localhost:5050/superAdmin/getAllCategorie`)
      .then(function (response) {
          
        setCategory(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    })
  const getIdCategory= (id)=>{
    localStorage.setItem('idCategory',id);
    history.push('/product');
  
  }
    

    return (
<section className="text-gray-600 body-font bg-gray-200">
  <Navbar/>
  <div className="container  px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">BIENVENUE CHEZ FOURNISSEUR SAFI</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Proximité, service et flexibilité sont nos points forts. Des professionnels au service des professionnels.</p>
    </div>
    <Link to='/promotion'><img alt="" src={promo} style={{width:'185px',position:'absolute',marginTop:'-14%',marginLeft:'-7%'}} /></Link>
    <div className="flex flex-wrap -m-4" Link to='/product'>
    { category && category.map(item =>(
      <div className="lg:w-1/3 sm:w-1/2 p-4 mt-5">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={item.imageCategorie} style={{borderRadius:"30px",height:'220px'}}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100" style={{borderRadius:"30px",height:'230px'}}>
            <Link onClick={()=>getIdCategory(item._id)}><h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CATÉGORIE</h2></Link>
            <Link ><h1 className="title-font text-lg font-medium text-gray-900 mb-3">  {item.nameCategorie}</h1></Link>
            <Link ><p className="leading-relaxed">{item.description}</p></Link>
          </div>
        </div>
      </div>
          ))}

    </div>
  </div>
  <Footer/>
</section>

  )
}
export default Home 