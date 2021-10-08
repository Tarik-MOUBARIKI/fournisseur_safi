import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css";

const  AddProduct = () => {

    const history = useHistory();

    const [titel, setTitel] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [productImg, setProductImg] = useState("");
    const [quantity, setQuantity] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    
    const idF=localStorage.getItem('idF');
    console.log(idF);

//---------add Product------------- 


	const handleSubmit = (e) => {
		e.preventDefault();

    const Product = {titel,description,price,productImg,quantity,category:categorySelected,fournisseur:idF,currentDate};

	axios.post(`http://localhost:5050/fournisseur/addProduct`,Product)
          
		.then(res => {
		    if(res.error){
				return false
			}else{
        console.log(res.data);
         history.push('/listProduct')
			}
		 
		})
	}
  const [category, setCategory] = useState();
  const [categorySelected, setCategorySelected] = useState();

// get all sellers 

  useEffect(()=>{

    axios.get(`http://localhost:5050/superAdmin/getAllCategorie`)
      .then(function (response) {
          
        setCategory(response.data)
      
      }).catch(function (err) {
        console.log(err);
    });
    
    },[])
  // const [listProductsLength, setlistProductsLength] = useState();

  // const checklength = ()=>{
  //   if(listProductsLength > 9){
  //     toastr.error('You have increase Your Limets Buy a pack !!')
  //     history.push('/buyPack');

  //   }
  // }


return (


<div className="font-sans">
  <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-red-400 to-blue-500 ">
    <div className="relative sm:max-w-sm w-full">
      <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
      <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
      <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
        <label htmlFor className="block text-sm text-gray-700 text-center font-bold">
        Add Product
        </label>
        
        <form method="#" action="#" className="mt-10" onSubmit={handleSubmit}>
          <div className="mt-7">
            <input type="text" placeholder="Titel" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={titel}
            onChange={e => setTitel(e.target.value)}/>
          </div>
          <div className="mt-7">
          
              <textarea placeholder="description" className="mt-1 block w-full border-none bg-gray-100 h-20 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
               value={description}
               onChange={e => setDescription(e.target.value)}></textarea>
      
          </div>
          <div className="mt-7">
            <input type="text" placeholder="Price" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={price}
            onChange={e => setPrice(e.target.value)}/>
          </div>
          <div className="mt-7">                
            <input type="text" placeholder="Url Picture" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={productImg}
            onChange={e => setProductImg(e.target.value)}/>                           
          </div>
          <div className="mt-7">                
            <input type="date" placeholder="date" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={currentDate}
            onChange={e => setCurrentDate(e.target.value)}/>                           
          </div>
          <div className="mt-7">                
            <input type="text" placeholder="Quantity" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={quantity}
            onChange={e => setQuantity(e.target.value)} />                           
          </div>
          <div className="mt-7">  
          <label className="block mb-2 text-sm font-bold text-gray-700"> Category </label>
            <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            value={categorySelected}
            onChange={e => setCategorySelected(e.target.value)}
            >
                 { category && category.map(item =>(
              <option key={item._id} value={item._id}>{item.nameCategorie}</option>
                 ))}
            </select>
          </div>
          <div className="mt-7">
            <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
             Add Product
            
            </button>
          </div>
       
        </form>
      </div>
    </div>
  </div>
</div>


    )
}
export default AddProduct;
