import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className='hidden lg:block'>
            <Link to='/home' className="normal-case text-lg font-semibold">Kito Skill</Link>
          </div>
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/home'>Homepage</Link></li>
              <li><Link>Portfolio</Link></li>
              <li><Link>About</Link></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <div className='hidden lg:block'>
            <Link to='/courses' className="normal-case text-lg font-semibold mx-6">Courses</Link>
            <Link to='/faq' className="normal-case text-lg font-semibold mx-6">FAQ</Link>
            <Link to='/blog' className="normal-case text-lg font-semibold mx-6">Blog</Link>
          </div>
          <div className='md:block lg:hidden'>
            <Link to='/home' className="normal-case text-lg font-semibold">Kito Skill</Link>
          </div>
        </div>
        <div className="navbar-end">
          <Link className='btn btn-ghost' to='/login'>Log In</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;