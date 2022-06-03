import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = (props) => {

    const[InputValue, setInputValue] = useState('Hola Mundo');

    const handleChangeValue = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if (InputValue.trim().length > 1) {
            props.setCategories( cats => [InputValue, ...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={InputValue} 
                onChange={handleChangeValue}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}