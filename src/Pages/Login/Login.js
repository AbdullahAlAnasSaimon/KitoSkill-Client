import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
  const { setUser, logInUser, googleSignIn, githubSignIn } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success('Log In Successfull');
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      })
    }
    
    const signUpWithGoogle = () => {
      googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success('Log In Successfull');
        navigate(from, { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      })
  }

  const signUpWithGithub = () =>{
    githubSignIn(githubProvider)
    .then(result =>{
      const user = result.user;
      setUser(user);
      toast.success('Sign Up Successfull');
      navigate(from, { replace: true });
    })
    .catch(error => {
      toast.error(error.message);
    })
  }

  return (
    <form onSubmit={handleLogIn} className='w-10/12 md:w-6/12 lg:w-4/12 mx-auto border-2 border-gray-300 p-8 my-5 rounded-lg'>
      <h2 className='text-3xl font-bold text-gray-700 mb-8'>Log In</h2>
      <div className='my-5'>
        <input className='border-b-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="email" name='email' placeholder='Email Address' required />
      </div>
      <div className='my-5'>
        <input id='password' className='border-b-2 w-full p-2 focus:border-violet-500 outline-0 duration-200 ease-in-out' type="password" name='password' placeholder='Password' required />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <input type="checkbox" className="checkbox checkbox-xs rounded-sm mr-2" />
          <label htmlFor="remember">Remember Me</label>
        </div>
        <div>
          <Link className='underline text-violet-400'>Forget Password</Link>
        </div>
      </div>
      <button className='bg-indigo-400 hover:bg-indigo-500 py-3 w-full my-8 rounded-md font-semibold' type="submit">Log In</button>
      <p className='text-center'>Don't Have An Account? <Link to='/signup' className='underline text-violet-400'>Create An Account</Link></p>
      <hr className='border-t-2 border-gray-300 my-8' />
      <p className='font-bold text-gray-500 text-center bg-white -mt-12 mb-4 w-3/12 mx-auto'>OR</p>
      <div>
        <button onClick={signUpWithGoogle} type='button' className='border-2 border-gray-700 hover:bg-gray-100 w-full my-2 py-2 rounded-md'><FcGoogle className='text-xl inline-block mr-3' />Log In With Google</button>
        <button onClick={signUpWithGithub} type='button' className='bg-gray-900 hover:bg-gray-800 text-white w-full my-2 py-3 rounded-md'><FaGithub className='text-xl inline-block mr-3 text-white' />Log In With Github</button>
      </div>
    </form>
  );
};

export default Login;