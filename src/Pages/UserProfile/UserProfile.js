import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaUserAlt } from 'react-icons/fa';

const UserProfile = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-around py-10'>
      <div>
          <>{
            user?.photoURL ? 
            <img className='w-64 h-64 border-4 border-indigo-300 p-2 rounded-full mx-auto md:mx-0' src={user?.photoURL} alt="" /> :
            <FaUserAlt className='w-64 h-64 border-4 border-indigo-300 p-2 rounded-full mx-auto md:mx-0 text-gray-600'/> 
          }
          </>
          <h2 className='text-3xl text-center md:text-left'> {user?.displayName}</h2>
      </div>
      <div className='w-full md:w-7/12'>
          <form className=''>
            <div className='my-5'>
              <label htmlFor="">User Name</label>
              <input className='border-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="text" placeholder='Full Name' value={user?.displayName} readOnly />
            </div>
            <div className='my-5'>
              <label htmlFor="">User Email</label>
              <input className='border-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="email" placeholder='Email Address' value={user?.email} readOnly/>
            </div>
            <div className='my-5'>
              <label htmlFor="">Photo URL</label>
              <input className='border-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="text" placeholder='Photo URL' value={user?.photoURL} readOnly/>
            </div>
            
            <div className='my-5'>
              <label htmlFor="">Last Sign In Time</label>
              <input className='border-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="text" placeholder='Last Sign In' value={user?.metadata?.lastSignInTime} readOnly/>
            </div>
          </form>
        </div>
    </div>
  );
};

export default UserProfile;