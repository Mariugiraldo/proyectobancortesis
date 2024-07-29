import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from './../services/CategoryService';
import { createArticle } from './../services/ArticleService';

const DonationRequestForm = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [categories, setCategories] = useState([]);
  const [request, setRequest] = useState({
    name: '',
    description: '',
    categoryId: ''
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
        setCategories(categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prevRequest) => ({
      ...prevRequest,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = async () => {
    try {
      const response = await createArticle(request);
      console.log(response);
      if (response) alert('Solicitud registrada exitosamente');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-center mb-6">
          <button
            type="button"
            onClick={handleBackClick}
            className="mr-2 bg-white text-gray-700 hover:text-gray-900 focus:outline-none rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h2 className="text-center text-2xl font-bold flex-grow">Solicitar Donación</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={request.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Categoría:</label>
          <select
            id="category"
            name="categoryId"
            value={request.categoryId}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled default>Seleccione una categoría</option>
            {categories.length > 0 ? 
            (categories.map(category => <option key={category.idCategory} value={category.idCategory}>{category.name}</option>)) 
            : <></>}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={request.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-[#848484] hover:bg-[#6c6c6c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowConfirmation(true)}
          >
            Solicitar
          </button>
          <button
            type="button"
            className="bg-white border-2 border-[#679436] text-[#679436] hover:bg-[#679436] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p className="mb-4">¿Estás seguro de que quieres solicitar este producto?</p>
            <button
              className="bg-[#848484] hover:bg-[#6c6c6c] text-white font-bold py-2 px-4 rounded mr-2"
              onClick={handleConfirm}
            >
              Confirmar
            </button>
            <button
              className="bg-white border-2 border-[#679436] text-[#679436] hover:bg-[#679436] hover:text-white font-bold py-2 px-4 rounded"
              onClick={() => setShowConfirmation(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationRequestForm;
