import React from 'react';
import { ApiTopPropduct } from '../componentApi/TopProductsApi';
import Product from './Product';


const Products = () => {
    return <div name='product' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 my-5 mx-5 md:mx-1 justify-center items-center'>
        {
            ApiTopPropduct.map((product, index) => (
                <Product product={product} key={index} />
            ))
        }
    </div>;
};

export default Products;

