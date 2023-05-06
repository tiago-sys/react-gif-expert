import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onNewCategory(inputValue.trim());
        setInputValue('');
    };

    return (
        <>
            <form action="">
                <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                />
                <button onClick={onSubmit}>Agregar</button>
            </form>
        </>
    );
};
