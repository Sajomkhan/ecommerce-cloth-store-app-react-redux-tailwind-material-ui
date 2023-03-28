import React from 'react';
import { ApiCategories } from '../componentApi/CategoryApi';
import Category from './Category';

const Categories = () => {
  return <div className='my-4 mx-5 md:mx-1 lg:mx-11 flex md:flex-row flex-col justify-around items-center'>
    {ApiCategories.map((category, index) => (
      <Category item={category} key={index} />
    ))}
  </div>;
};

export default Categories;
