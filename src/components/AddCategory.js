import React, {useState} from 'react';
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(cats => [inputValue, ...cats]);
        setInputValue('');
    }

    return (
        <form onSubmit={ handleSubmit } className="text-center">
            <input className="w-10/12 border-2 border-emerald-900 mb-4"
                   type = "text"
                   value = { inputValue }
                   onChange = { handleInputChange }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    //inputValue: PropTypes.string.isRequired
}