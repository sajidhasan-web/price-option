import React from 'react';
import { HiBadgeCheck } from "react-icons/hi";
import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    return (
        <div className='text-xl'>
            <p className='flex gap-4 items-center text-white'><HiBadgeCheck className='text-green-500 text-clip' />{feature}</p>
            
        </div>
    );
};

Feature.propTypes ={
    feature: PropTypes.string
}


export default Feature;