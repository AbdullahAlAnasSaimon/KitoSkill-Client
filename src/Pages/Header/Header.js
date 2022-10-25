import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <h1>This is header</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Header;