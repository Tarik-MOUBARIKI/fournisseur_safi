import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const ConfirmSeller=()=> {


  const history = useHistory();


  const [status, setStatus] = useState("");
  const [statusUpdated, setStatusUpdated] = useState("");

  const id=localStorage.getItem('idFournisseur');


// ---------------------get fournisseur to update-----------------------------
useEffect(()=>{

  axios.get(`http://localhost:5050/superAdmin/getFournisseurById/${id}`)
  .then(function (response) {

    setStatus(response.data.status)



  
  }).catch(function (err) {
    console.log(err);
});

},[])
// -----------------------update Seller---------------------------
const handleSubmit = (e) => {
  e.preventDefault();

const data = {status:statusUpdated};

axios.put(`http://localhost:5050/superAdmin/updateFournisseur/${id}`,data)
.then(res => {
  if(res.error){
    return false
  }else{
    console.log(res.data);
    history.push('/fournisseur')
  }
 
})

}

    return (
        <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-400 ">
          <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
      <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <label htmlFor className="block text-sm text-gray-700 text-center font-bold">
                Confirm Compte
              </label>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"  onSubmit={handleSubmit}>


        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700"> Status </label>
            <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            value={statusUpdated}
            onChange={e => setStatusUpdated(e.target.value)}
            >
              <option value="Inactive">Inactive</option>
              <option value="Active">Active</option>
              <option value="Block">Block</option>
            </select>
          
        </div>
        <div className="mb-6 text-center">
          <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Confirm </button>
        </div>     
      </form>
      </div>
    </div>
  </div>
</div>
)
}
export default ConfirmSeller