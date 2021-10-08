import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const  AddCategory = () => {

    const history = useHistory();

    const [imageCategorie, setImageCategorie] = useState("");
    const [nameCategorie, setNameCategorie] = useState("");
    const [description, setDescription] = useState("");


//---------add admin------------- 

	const handleSubmit = (e) => {
		e.preventDefault();


  

    const Category = {imageCategorie,nameCategorie,description};

	axios.post(`http://localhost:5050/superAdmin/addCategorie`,Category)
          
		.then(res => {
		    if(res.error){
				return false
			}else{
        console.log(res.data);
         history.push('/category')
			}
		 
		})
	}

return (
<div className="font-sans">
  <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-red-400 to-blue-500 ">
    <div className="relative sm:max-w-sm w-full">
      <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
      <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
      <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
        <label htmlFor className="block text-sm text-gray-700 text-center font-bold">
          Add Category
        </label>
        <form method="#" action="#" className="mt-10" onSubmit={handleSubmit}>
          <div className="mt-7">
            <input type="text" placeholder="Url Category" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={imageCategorie}
            onChange={e => setImageCategorie(e.target.value)}/>
          </div>
          <div className="mt-7">
            <input type="text" placeholder="Name Category" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
            value={nameCategorie}
            onChange={e => setNameCategorie(e.target.value)}/>
          </div>
          <div className="mt-7">                
          <textarea placeholder="description" className="mt-1 block w-full border-none bg-gray-100 h-20 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"  required 
               value={description}
               onChange={e => setDescription(e.target.value)}></textarea>                         
          </div>
          <div className="mt-7">
            <button type="submit" className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
             Add 
            </button>
          </div>
       
        </form>
      </div>
    </div>
  </div>
</div>


    )
}
export default AddCategory;
