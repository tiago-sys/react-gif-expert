import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import { v4 as uuidv4 } from 'uuid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (newCategory.trim() === '') {
            return;
        } else if (categories.includes(newCategory)) {
            return;
        } else {
            setCategories([newCategory, ...categories]);
        }
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory={onAddCategory} />

            <ol>
                {categories.map((category) => (
                    <GifGrid key={uuidv4()} category={category} />
                ))}
            </ol>
        </>
    );
};
