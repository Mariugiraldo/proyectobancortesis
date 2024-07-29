import React, { useEffect, useState } from 'react'
import { MdOutlineStar } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import { addFavorite, deleteFavorite } from '../services/FavoritesService';

export default function ProductCard({ product, favoriteId }) {
  if (!product) return null;

  const auth = useAuth();

  const [favorite, setFavorite] = useState(false);
  const [favArticle, setFavArticle] = useState({});

  useEffect(() => {
    if (auth.isAuthenticated) {
      setFavArticle({
        id_user: auth.user.id_user,
        idProduct: product.id
      })
    }
    if (favoriteId) {
      console.log('Favorito', product.id);
      setFavorite(true);
    }
  }, []);

  const switchFavorite = async () => {
    if (!favorite) {
      console.log('Agrego a lista', favArticle, favorite);
      try {
        await addFavorite(favArticle);
      } catch (error) {
        console.error(error);
      }

    } else {
      try {
        await deleteFavorite(favoriteId);
      } catch (error) {
        console.error(error);
      }
      console.log('Borro de lista', product.id, favorite);
    }
    setFavorite(!favorite);
  }

  const { name, description, category, imageURL, userName } = product;
  return (
    <div className='flex items-center w-full gap-1 bg-transparent border-solid border border-greenAccent rounded-xl h-32 overflow-hidden'>
      <div className='h-full w-36 flex-nowrap flex-shrink-0 rounded-xl'>
        <Link to={`/article/${product.id}`} >
          <img className='h-full w-full rounded-xl border border-solid border-greenAccent' src={imageURL != '' ? imageURL : '/img/product.png'} alt={category} />
        </Link>
      </div>
      <div className='flex-grow h-full w-full flex flex-col text-blueSecond items-center justify-center text-start gap-2 p-1 text-wrap'>
        <h3 className='self-start text-lg font-semibold leading-4'>{name}</h3>
        <p className='text-sm w-full leading-4'>{description}</p>
        <div className='flex w-full justify-between items-center text-sm pr-2'>
          <span className='flex items-center gap-1'>{userName} 5 <MdOutlineStar className='inline w-5 h-5' /></span>
          {auth.isAuthenticated && <>
          {!favorite ?
            <IoMdHeartEmpty className='w-5 h-5 cursor-pointer' onClick={switchFavorite} />
            :
            <IoMdHeart className='w-5 h-5 text-red-400 cursor-pointer' onClick={switchFavorite} />
          }
          </>}
        </div>
      </div>
    </div>
  )
}
