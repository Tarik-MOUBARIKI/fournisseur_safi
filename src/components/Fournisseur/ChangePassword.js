import React, {useEffect, useState} from 'react';
import { Link,useHistory } from 'react-router-dom';
import axios from 'axios';

const ChangePassword=()=> {


  const history = useHistory();


  const [password, setPassword] = useState("");
  const [statusUpdated, setStatusUpdated] = useState("");

  const id=localStorage.getItem('idF');


// ---------------------get fournisseur to update-----------------------------
useEffect(()=>{

  axios.get(`http://localhost:5050/superAdmin/getFournisseurById/${id}`)
  .then(function (response) {

    setPassword(response.data.password)
 
  }).catch(function (err) {
    console.log(err);
});

},[])
// ----------------------- Change Password ---------------------------
const handleSubmit = (e) => {
  e.preventDefault();

const data = {password:password};

axios.put(`http://localhost:5050/fournisseur/changePassword/${id}`,data)
.then(res => {
  if(res.error){
    return false
  }else{
    console.log(res.data);
    history.push('/myAccount')
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
                Change Password
              </label>
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"  onSubmit={handleSubmit}>


        <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700"> New Password </label>
            <input className="w-full px-5 py-1 text-black bg-gray-300 rounded focus:outline-none focus:bg-white" type="password" id="password" placeholder="enter password" arial-label="password"
               required 
               value={password} 
               onChange={e => setPassword(e.target.value)}/>
          
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
export default ChangePassword