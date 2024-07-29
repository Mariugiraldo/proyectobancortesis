// src/pages/Register.jsx
import '../styles/Styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/AuthService';
import Onboarding from './Onboarding';
import { useAuth } from '../context/AuthProvider';

const Register = () => {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    province: '',
    repeatedPassword:''
  });

  /*
{
  "name": "Pablo",
  "lastName": "Velasco",
  "dni": "35184235",
  "email": "pablo@gmail.com",
  "password": "123456789",
  "birthday": "1990-07-02",
  "phoneNumber": "stringstri",
  "province": "Mendoza",
  "photoUser": "string",
  "socialWorkNumber": 0,
  "disabilityCertificateNumber": 0,
  "repeatedPassword": "123456789"
}
  */

  const [showOnboarding, setShowOnboarding] = useState(false);
  const navigate = useNavigate();

  if(auth.isAuthenticated) navigate('/home');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registerUser(formData);
      navigate('/login');
    } catch (error) {
      alert('Error al registrarse');
    }
    console.log('Datos usuario a Registrar', formData);
  };

  const handleFinishOnboarding = () => {
    navigate('/home');
  };

  if (showOnboarding) {
    return <Onboarding onFinish={handleFinishOnboarding} />;
  }

  return (
    <div className="register-container min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
        <div className="profile-header mb-4">
          <div className="profile-pic"><img src="/img/logo.webp" alt="logo" /></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstName" className="sr-only">Nombre</label>
              <input
                type="text"
                id="firstName"
                name="name"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="repeatedPassword" className="sr-only">Repetir Contraseña</label>
              <input
                type="password"
                id="repeatedPassword"
                name="repeatedPassword"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Repetir contraseña"
                value={formData.repeatedPassword}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="province" className='sr-only'>Ubicación</label>
              <select
                name="province"
                id="province"
                value={formData.province}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" defaultValue>Elige tu provincia </option>
                <option value="Buenos Aires" default>Buenos Aires</option>
                <option value="Cordoba">Córdoba</option>
                <option value="Mendoza" >Mendoza</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="Santa Fe">Santa Fe</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#679436] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Registrarme
            </button>
          </div>
          <div className="continue-without-registering text-center mt-4">
            <label htmlFor="terms">
              <a
                href="#"
                className="continue-link text-sm text-blue-600 hover:text-blue-500"
                onClick={() => setShowOnboarding(true)}
              >
                Continuar sin registrarme
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
