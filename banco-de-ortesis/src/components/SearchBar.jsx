// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [state, setState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ query, category, state });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row justify-evenly items-center w-full sm:w-3/4 gap-2 p-2 rounded-lg bg-darkBlue shadow-md"
    >
      <div className="flex items-center w-full sm:w-auto">
        <input
          className="
            w-full sm:w-auto
            border-none 
            outline-none 
            focus:outline-none 
            active:outline-none 
            focus:ring-0 
            active:ring-0 
            bg-transparent
            placeholder-lightBlue
            text-lightBlue
          "
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button 
          type="submit" 
          className="ml-2 p-1 border border-gray-300 rounded-md bg-white text-darkBlue"
        >
          🔍
        </button>
      </div>
      <div className="flex flex-row gap-2 w-full sm:w-auto">
        <select
          className="border border-gray-300 rounded-md p-1 bg-darkBlue text-lightBlue"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">👨‍🦯 Categoria</option>
          <option value="1">🖐️ Miembro Superior</option> 
          <option value="2">🦵 Miembro Inferior</option>
          <option value="3">🦴 Axiales</option>
          <option value="4">🦽 Sillas de ruedas</option>
          <option value="5">🦯 Bastones</option>
          <option value="6">🚶‍♂️ Andadores</option>
          <option value="7">🛏️ Cama ortopédica</option>
          <option value="8">🛏️ Colchon antiescaras</option>
          <option value="9">🩼 Muletas</option>
        </select>
        <select
          className="border border-gray-300 rounded-md p-1 bg-darkBlue text-lightBlue min-w-[120px]"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="">👌 Estado</option>
          <option value="BUENO">👍 Bueno</option>
          <option value="REGULAR">😐 Regular</option>
          <option value="MALO">😣 Malo</option>
        </select>
      </div>
    </form>
  );
};

export default SearchBar;
