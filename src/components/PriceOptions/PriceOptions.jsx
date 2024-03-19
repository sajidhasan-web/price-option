import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const option = [
        {
            id: 1,
            price_name: "Basic",
            features: [
                "Access to basic gym equipment",
                "Limited group classes",
                "Locker access",
                "Discounts on personal training sessions"
            ],
            price: 30
        },
        {
            id: 2,
            price_name: "Standard",
            features: [
                "Access to more equipment and facilities",
                "More group classes",
                "Locker access",
                "Access to sauna and steam room"
            ],
            price: 50
        },
        {
            id: 3,
            price_name: "Premium",
            features: [
                "Access to all equipment and facilities",
                "Unlimited group classes",
                "Personal training sessions included",
                "Access to sauna, steam room, and swimming pool"
            ],
            price: 80
        },
        
    ];
    
    return (
        <div className='grid md:grid-cols-3 gap-5 mt-10 mx-10'>
            {
                option.map((option) => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            
        </div>
    );
};

export default PriceOptions;