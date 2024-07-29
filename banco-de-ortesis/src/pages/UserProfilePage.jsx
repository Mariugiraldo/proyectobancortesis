// src/pages/UserProfilePage.jsx
import '../styles/Styles.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';

const UserProfilePage = () => {

  const auth = useAuth();
  const {name, lastName} = auth.user;
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logOut();
    navigate('/login');
  };

  return (
    <div className="mt-16 profile-container">
      <div className="profile-header">
        <div className="profile-pic"><img src="/img/logo.webp" alt="logo" /></div>
        <div className="profile-name">{name} {lastName}</div>
      </div>
      <div className="profile-options">
        <Link to={'/userArticles'}>Mis Productos</Link>
        {/* <div>Valoraciones</div> */}
        {/* <div>Mensajes</div> */}
        <div>Configuración</div>
        <div>Privacidad</div>
        <div>Ayuda</div>
        <Link to={'/onboarding'}>Acerca de</Link>
      </div>
      <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default UserProfilePage;

