import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png'
import nproduct from '../images/nproduct.png'
import Navbar from '../parts/NavBar'
import Footer from '../parts/Footer';

const Product=()=> {

  const history = useHistory();
  const [products, setProducts] = useState();
  const [listProduct, setListProducts] = useState();

  const id=localStorage.getItem('idCategory');

useEffect(()=>{

  axios.get(`http://localhost:5050/product/getProductByCategory/${id}`)
    .then(function (response) {
        
      setProducts(response.data)
      setListProducts(response.data.length)
    console.log(response.data.length);
    }).catch(function (err) {
      console.log(err);
  });
  
  },[id])
//   const getIdProduct= (id)=>{
//     localStorage.setItem('idProduct',id);
//     history.push('/detailsProduct');
  
//   }
    

    return (
      <section className="text-gray-600 body-font bg-gray-200">
          <Navbar/>
  <div className="container px-5 py-24 mx-auto">


  {listProduct > 0  && 

    <div className="flex flex-wrap -m-4">
    { products && products.map(item =>(
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.productImg} style={{borderRadius:"30px",height:'220px'}} />
        </a>
        <div className="mt-4">
         <Link to='/detailsProduct'><h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item.category.nameCategorie}</h2></Link> 
          <Link to='/DetailsProduct'><h2 className="text-gray-900 title-font text-lg font-medium">{item.titel}</h2></Link>
          <Link to='/DetailsProduct'><p className="mt-1" style={{fontSize:'33px',color:'black'}}>{item.price} DH</p></Link>
          <div className="flex items-center gap-4 my-6 cursor-pointer ">
                <div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">Add to bag</div>
            </div>
        </div>
      </div>
    ))}
    </div>
  
  
}     
{listProduct == 0  && 
  
    <img src={nproduct} style={{width:'50%',marginLeft:'25%'}} />

   
  
}  
  </div>
   
     

  <Footer/>
</section>

        /* <section className="text-gray-600 body-font">
  <Navbar/>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">BIENVENUE CHEZ FOURNISSEUR SAFI</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Proximité, service et flexibilité sont nos points forts. Des professionnels au service des professionnels.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://previews.123rf.com/images/monticello/monticello1611/monticello161100152/66049900-poznan-pologne-23-novembre-2016-le-march%C3%A9-mondial-des-boissons-gazeuses-est-domin%C3%A9-par-les-marques-de-qu.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CATÉGORIE</h2>
            <Link><h1 className="title-font text-lg font-medium text-gray-900 mb-3">BOISSONS</h1></Link>
            <p className="leading-relaxed">Ici vous pouvez trouver toutes les boissons...lorem lorem lorem lorem</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i2.wp.com/lhl.fr/audit-hygiene-lyon/wp-content/uploads/2019/02/produits-menagers.jpg?fit=1030%2C697/601x361" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CATÉGORIE</h2>
            <Link><h1 className="title-font text-lg font-medium text-gray-900 mb-3">NETTOYAGE</h1></Link>
            <p className="leading-relaxed">Ici vous pouvez trouver toutes les produits de nettoyage...</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://i-sam.unimedias.fr/2012/09/14/manger-epice.png?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=507&w=806/603x363" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CATÉGORIE</h2>
            <Link><h1 className="title-font text-lg font-medium text-gray-900 mb-3">EPICES</h1></Link>
            <p className="leading-relaxed">... booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.lavieeco.com/wp-content/uploads/2015/10/fromage-maroc-2014-09-15.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CATÉGORIE</h2>
            <Link><h1 className="title-font text-lg font-medium text-gray-900 mb-3">FROMMAGE</h1></Link>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://assabah.ma/wp-content/uploads/2020/01/photo-taghdiya.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <Link><h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CATÉGORIE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3"> LEGUMINEUSES</h1></Link>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.les-best-of.com/wp-content/uploads/2020/09/5666.jpg" />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">CATÉGORIE</h2>
          <Link><h1 className="title-font text-lg font-medium text-gray-900 mb-3">CAFÉ</h1></Link>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</section>

  )
} */
    )
}
export default Product