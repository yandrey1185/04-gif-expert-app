import React from 'react';
import {useFetchGif} from "../hooks/useFetchGif";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGif(category);

    return (
        <>
            <h3 className="text-center font-bold text-2xl mb-4">{ category }</h3>

            { loading && <p>Loading....</p> }

            <div className="flex flex-wrap flex-row grid grid-cols-3 gap-4">
                {
                    images.map(img => {
                        return <GifGridItem
                            key={ img.id }
                            { ...img }
                        />
                    })
                }
            </div>
        </>
    );
};