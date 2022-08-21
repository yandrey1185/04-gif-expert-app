import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Metallica']);

    return (
        <>
            <h2 className="m-4 text-3xl font-bold p-8 shadow-lg p-6 max-w-sm mx-auto bg-green-100 rounded-xl shadow-lg text-center space-x-4">GIF EXPERT APP</h2>
            <AddCategory setCategories = { setCategories } />
            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key = { category }
                            category = {category}
                        />
                    )
                }
            </ol>
        </>
    );
};