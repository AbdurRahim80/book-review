import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Read = () => {
    const readData = useLoaderData();
    console.log("data.................................................",readData);
    return (
        <div>
            Read
        </div>
    );
};

export default Read;