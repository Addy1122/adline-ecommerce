import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../utils/userSlice';

const Logout = () => {
const dispatch =useDispatch()
const handleLogout= (e)=>{
    e.preventDefault();

    dispatch(logout())

}
  return (
      <>
   
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
             Welcome to Tuple<span className='user_name'></span>
            </h2>
            <div className='mt-4 lg:px-4x'>
            <button
                  type="submit"
                  className="flex w-full  justify-center rounded-md bg-[#285192] px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#36465f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#36465f]"
                  onClick={(e)=> handleLogout(e)}
                >
                  Logout
                </button>
                </div>
          </div>
  
          
        </div>
      </>
 )} 

export default Logout
