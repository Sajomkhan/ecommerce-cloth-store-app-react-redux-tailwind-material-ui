import React from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <>
      <Slider />
      <Categories />
      <div className='mx-5 xl:mx-[150px]'>
        <Products />
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
