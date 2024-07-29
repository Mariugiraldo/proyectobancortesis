// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import React, { useEffect, useState } from 'react';
import { getAllArticles } from '../services/ArticleService';
import { useAuth } from '../context/AuthProvider';

const HomePage = () => {
  const auth = useAuth();
  const [productList, setProductList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllArticles(); // Llama a la función correctamente y espera su resolución
        setProductList(products);
      } catch (error) {
        console.error(error);
      }
    };
    if (auth.isAuthenticated) {
      setFavorites(auth.user.favoritesList);
    }
    fetchProducts();
  }, []);

  if (!productList) return null;

  console.log('Recibiendo productos', productList);
  return (
    <div className='flex flex-col w-full items-center p-4 mb-20'>
      <h1 className="text-lg self-start font-bold">Más buscados</h1>
      <div className='flex w-full flex-col gap-3'>
        {productList.map(product => {
          const favorite = favorites.find(fav => fav.product.idProduct === product.id);
          const favoriteId = favorite ? favorite.id_favorites : null;

          return (
            <ProductCard
              key={product.id}
              product={product}
              favoriteId={favoriteId} // Pasa el id_favorites como prop
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
