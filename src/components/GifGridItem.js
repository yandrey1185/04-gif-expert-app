import React from 'react';

export const GifGridItem = ({ id, title, url }) => {
    return (
        <div className="grid content-center mb-10 mr-10 overflow-hidden rounded-lg border-2 border-rose-500">
            <img className="w-full max-h-44 text-center" alt={ title } src={ url } />
            <p className="p-5 text-center">{ title }</p>
        </div>
    );
};