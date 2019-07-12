import React from 'react';
import './BurgerIngredient.css';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className='ingredient bread-bottom'></div>;
            break;
        case ('bread-top'):
            ingredient = <div className='ingredient bread-top'></div>;
            break;
        case ('meat'):
            ingredient = <div className='ingredient meat'></div>;
            break;
        case ('cheese'):
            ingredient = <div className='ingredient cheese'></div>;
            break;
        case ('salad'):
            ingredient = <div className='ingredient salad'></div>;
            break;
        case ('bacon'):
            ingredient = <div className='ingredient bacon'></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
}

export default burgerIngredient;