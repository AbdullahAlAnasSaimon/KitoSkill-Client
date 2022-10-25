import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import {FaGithub} from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Signup = () => {

  const {setUser, createUser, googleSignIn} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  
  const handleSignUp = event =>{
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(fullName, email, password, confirmPassword);
    
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      setUser(user);
      form.reset();
    })
    .catch(error => {
      console.log(error);
    })  
  }

  const signUpWithGoogle = () =>{
    googleSignIn(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <form onSubmit={handleSignUp} className='w-4/12 mx-auto border-2 border-gray-300 p-8 my-5 rounded-lg'>
      <h2 className='text-3xl font-bold text-gray-700 mb-8'>Create An Account</h2>
      
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="text" name='fullName' placeholder='Full Name' required/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="email" name='email' placeholder='Email Address' required/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="password" name='password' placeholder='Password' required/>
      </div>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-orange-500 outline-0 duration-200 ease-in-out' type="password" name='confirmPassword' placeholder='Confirm Password' required/>
      </div>
      <button className='bg-orange-400 hover:bg-orange-500 py-3 w-full my-8 rounded-md font-semibold' type="submit">Sign Up</button>
      <p className='text-center'>Don't Have An Account? <Link to='/login' className='underline text-orange-400'>Log In</Link></p>
      <hr className='border-t-2 border-gray-300 my-8' />
      <p className='font-bold text-gray-500 text-center bg-white -mt-12 mb-4 w-3/12 mx-auto'>OR</p>
      <div>
        <button onClick={signUpWithGoogle} type='button' className='border-2 border-gray-700 hover:bg-gray-100 w-full my-2 py-2 rounded-md'><FcGoogle className='text-xl inline-block mr-3'/> Sign Up With Google</button>
        <button type='button' className='bg-gray-900 hover:bg-gray-800 text-white w-full my-2 py-3 rounded-md'><FaGithub className='text-xl inline-block mr-3 text-white'/>Sign Up With Github</button>
      </div>
    </form>
  );
};

export default Signup;