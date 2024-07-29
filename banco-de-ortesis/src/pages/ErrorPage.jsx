import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const brElements = [];
    for (let i = 0; i < 8; i++) {
      brElements.push(<br key={i} />);
    }
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  const handleGoHome = () => {
    navigate('/home'); // Navega a la página de inicio
  };

  return (
    <>
        {brElements}
        <div className="profile-header mb-4">
        <div className="profile-pic"><img src="/img/logo.webp" alt="logo" />
        </div> <h1 className="text-6xl font-bold text-gray-800 mb-4">Diagnóstico: Error 404</h1>
      <p className="text-xl text-gray-600 mb-8">Prescripción: ¡Redirigir a la página principal!</p>
      <div className="flex space-x-4">
        <button
          onClick={handleGoHome}
        className="bg-[#1F7A8C] hover:bg-[#6c6c6c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Volver al Inicio
        </button></div>
      </div>
    </>
  );
};

export default ErrorPage;
