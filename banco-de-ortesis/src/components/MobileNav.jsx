import React from 'react'
import { Link } from 'react-router-dom'

import { SlHome } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineDns } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuth } from '../context/AuthProvider';

export default function MobileNav() {
  const auth = useAuth();
  return (
    <div className='fixed bottom-0 flex w-full h-16 text-base  bg-cyanMain justify-evenly items-center md:sticky'>
      {auth.isAuthenticated ?
        <>
          <Link to={'/home'} className='flex text-whiteBg flex-col items-center justify-center'>
            <SlHome className='w-6 h-6' />
            Home
          </Link>
          <Link to={'/favorites'} className='flex text-whiteBg flex-col items-center justify-center'>
            <IoMdHeartEmpty className='w-6 h-6' />
            Favoritos
          </Link>
          <Link to={'/upload'}>
            <div className='flex text-black justify-center items-center -translate-y-8 w-16 h-16 rounded-full bg-whiteBg drop-shadow-2xl border border-solid border-cyanMain'>
              <AiOutlinePlus className='h-7 w-7' />
            </div>
          </Link>
          <Link to={'/userArticles'} className='flex text-whiteBg flex-col items-center justify-center'>
            <MdOutlineDns className='w-6 h-6' />
            Publicados
          </Link>
          <Link to={'/profile'} className='flex text-whiteBg flex-col items-center justify-center'>
            <FaRegUser className='w-6 h-6' />
            Perfil
          </Link>
        </>
        :
        <>
        <Link to={'/register'} className='text-xl p-2.5 border border-solid border-whiteBg rounded-xl 
        bg-cyanMain text-whiteBg  font-semibold hover:bg-whiteBg hover:text-cyanMain'>Registrarme</Link>
        <Link to={'/login'} className='text-xl p-2.5 bg-whiteBg text-cyanMain  border border-solid rounded-xl
          font-semibold hover:bg-cyanMain hover:text-whiteBg'>Iniciar Sesión</Link>
        </>}
    </div>
  )
}
