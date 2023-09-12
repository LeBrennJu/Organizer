import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginForm } from '../../store/authActions';
import { selectLoginForm } from '../../store/authSlice';

function Navbar() {
  const hasToken = localStorage.getItem('token');
  const dispatch = useDispatch();
  const loginForm = useSelector(selectLoginForm);

  const toggleLoginForm = () => {
    dispatch(setLoginForm(!loginForm)); // Inversez la valeur de loginForm (true devient false, et vice versa)
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header>
      <h1>Organizer</h1>
      <input type="text" placeholder="Search" aria-label="Search" /> 
      <div className="user--gestion">
        {hasToken ? (
          <p onClick={handleLogout}>Déconnexion</p>
        ) : (
          <p>
            <span onClick={toggleLoginForm}>
              {loginForm ? 'Inscription' : 'Connexion'}
            </span>
          </p>
        )}
      </div>
    </header>
  );
}

export default Navbar;
