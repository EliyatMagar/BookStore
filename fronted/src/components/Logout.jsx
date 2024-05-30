import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout Succesfully");
            setTimeout(()=>{  
            window.location.reload();
            },2000)
           
        } catch (error) {
            toast.error("Error",+error.message);
            setTimeout(()=>{},3000);
        }
    }
  return (
    <div>
      <button className='bg-red-500 px-3 py-2 text-white rounded-md cursor-pointer'  onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
