import React from 'react';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';

const CategoryPage = () => {
    return <>
        <div className=' w-10/12 mx-auto'>
            <div className='flex flex-col p-5'>
                <h1 className='text-[30px] place-self-center md:place-self-start font-bold'>Men's</h1>
                <div className='flex flex-col md:flex-row items-center justify-between mt-3'>
                    <div className='flex mb-5'>
                        <p>Filter by</p>
                        <select className='ml-3 border-2 border-silver'>
                            <option selected disabled>Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                        <select className='ml-3 border-2 border-silver'>
                            <option selected disabled>Color</option>
                            <option>Yellow</option>
                            <option>Blue</option>
                            <option>Red</option>
                            <option>Green</option>
                        </select>
                    </div>
                    <div className='flex mobile:flex-col'>
                        <p>Sort by</p>
                        <select className='ml-3 border-2 border-silver'>
                            <option selected >Newest (first)</option>
                            <option>Oldest (first)</option>
                            <option>Price (asc)</option>
                            <option>Price (desc)</option>
                        </select>
                    </div>
                </div>
            </div>
            <Products />
        </div>
        <NewsLetter />
        <Footer />
    </>;
};

export default CategoryPage;
