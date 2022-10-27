import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/Saly-12.png'

const Footer = () => {
  return (
    <footer className="footer p-10 mt-20 bg-violet-600 text-white">
      <div>
        <img className='w-16' src={Logo} alt="" />
        <p className='text-2xl font-semibold'>KitoSkill Inc.</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <Link className="link link-hover" to='/courses'>Courses</Link>
        <Link className="link link-hover" to='/faq'>FAQ</Link>
        <Link className="link link-hover" to='/blog'>Blog</Link>
        <Link className="link link-hover" to='/login'>Log In</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link className="link link-hover">About us</Link>
        <Link className="link link-hover">Contact</Link>
        <Link className="link link-hover">Jobs</Link>
        <Link className="link link-hover">Press kit</Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link className="link link-hover">Terms of use</Link>
        <Link className="link link-hover">Privacy policy</Link>
        <Link className="link link-hover">Cookie policy</Link>
      </div>
    </footer>
  );
};

export default Footer;