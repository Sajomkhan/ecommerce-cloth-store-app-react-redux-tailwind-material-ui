import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ item }) => {

  return (
    <div className='flex-1 mx-2 my-7 lg:mx-4 drop-shadow-lg rounded-md overflow-hidden relative hover:scale-105 ease-in duration-300 border-2 border-gray-200'>
      <img src={item.src} className="w-[100%]" alt='category_img' />
      <div className='flex absolute w-[100%] h-[100%] left-0 top-5 items-center justify-center flex-col'>
        <h2 className='text-[#9170c6] font-medium text-[30px]'>{item.title}</h2>
        <h2 className='text-sky-600 font-medium text-[18px] mb-2'>Unique Style</h2>
        <Link to="/category-page">
          <buttton className='btn my-2'>See more</buttton>
        </Link>
      </div>
    </div>)
};

export default Category;
