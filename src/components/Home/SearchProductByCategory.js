import React,{useEffect,useState} from 'react'
import { Link,useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../parts/NavBar';


const SearchProductByCategory=()=> {
    const history = useHistory();
const [products,setProducts] = useState('');
const {category} = useParams();

  useEffect(()=>{
    
    axios.get(`https://tarekmarket-api.herokuapp.com/Product/getProductByCategory/${category}`)
      .then(function (response) {
          
        setProducts(response.data)
        console.log(response.data);
   
      }).catch(function (err) {
        console.log(err);
    });
    
    },[category])

    const getIdProduct= (id)=>{
        localStorage.setItem('idProduct',id);
        history.push('/detailsProduct');
      
      }


    return (
        <div>
            <NavBar/>
            <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        { products && products.map(item =>(
           <div className="sm:w-1/6 mb-10 px-4">
               <div className="rounded-lg  overflow-hidden ">
                  <img alt="content" className="object-cover object-center " src={item.productImg} style={{width:160,height:160}} />
               </div>
                  <h2 className="title-font text-1xl font-medium text-gray-900 mt-6 mb-3">{item.titel}</h2>
                  <p className="leading-relaxed text-base text-red">{item.price}DH</p>
                  <div className="flex items-center gap-4 my-6 cursor-pointer ">
                <div className="bg-blue-600 px-5 py-3 text-white rounded-lg w-2/4 text-center">Add to bag</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
                  <Link onClick={()=>getIdProduct(item._id)} className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-green-700 lg:mt-0">More...</Link>
            </div>
        ))}
        </div>
    </div>
        </div>
    )
}
export default SearchProductByCategory