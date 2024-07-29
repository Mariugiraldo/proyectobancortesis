import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteArticle } from '../services/ArticleService';
import { TbEdit } from "react-icons/tb";
import { MdOutlineGroup } from "react-icons/md";
import { MdFindInPage } from "react-icons/md";


export default function UpdateArticleCard({ product }) {
    const navigate = useNavigate();
    const [date, setDate] = useState('');

    if (!product) return null;

    const { name, creationDate, category, imageURL, idProduct } = product;

    // useEffect(()=>{
    //     if(creationDate) setDate(creationDate.split(' ')[0]);
    // },[]);

    const deleteProduct = async (e) => {
        e.preventDefault();
        console.log('Se borrara el id: ' + idProduct);
        try {
            await deleteArticle(idProduct);
            alert('borrado correctamente')
            navigate('/home');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='flex items-center w-full gap-1 bg-transparent border-solid border border-greenAccent rounded-xl h-32'>
            <div className='h-full w-36 flex-nowrap flex-shrink-0 rounded-xl border border-solid border-greenAccent'>
                <Link to={`/article/${idProduct}`}>
                    <img className='h-full w-full rounded-xl' src={imageURL != '' ? imageURL : '/img/product.png'} alt={category} />
                </Link>
            </div>
            <div className='flex-grow flex flex-col text-blueSecond items-center justify-center text-start gap-2 p-1 text-wrap'>
                <h3 className='self-start text-lg font-semibold leading-4'>{name}</h3>
                <p className='text-sm w-full leading-4'>Fecha publicación: <br /> {creationDate}</p>
                <div className='flex w-full pr-1 justify-between items-center text-sm text-blueSecond'>
                    {/* <MdFindInPage className='text-blueSecond' /> */}
                    <Link><div className='flex items-center text-blueSecond'> <MdOutlineGroup className='w-5 h-5' /><span className='text-xs'>0 solicitudes</span></div></Link>
                    <Link to={`/update/${idProduct}`} state={{ product }}><TbEdit className='text-blueSecond w-5 h-5' /></Link>
                    <FaRegTrashAlt onClick={deleteProduct} className='text-blueSecond w-4 h-4 cursor-pointer' />
                </div>
            </div>
        </div>
    )

}
