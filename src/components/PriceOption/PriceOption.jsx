import React from 'react';
import Feature from '../Feature/Feature';
import PropTypes from 'prop-types';

const PriceOption = ({option}) => {

    const {price, price_name, features} = option

    return (
        <div className='bg-blue-600 p-5 rounded-xl flex flex-col'>
            <h2 className='text-white font-extrabold space-x-4 text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-5xl'>\  mon</span>
            </h2>
            <h4 className='text-5xl font-bold text-center text-white'>{price_name}</h4>
            <div className='mt-5 flex-grow'>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }

            </div>
            
            <button className='bg-green-500 hover:bg-green-800 mt-7 w-full py-3 text-white text-xl font-bold rounded-md'>Buy Now</button>
        </div>
    );
};


PriceOption.propTypes ={
    option: PropTypes.object
}

export default PriceOption;