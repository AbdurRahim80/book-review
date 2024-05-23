import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <h1 className='text-2xl font-extrabold'>
                {
                    error.status === 404? "Not found page " : ""
                }
            </h1>
        </div>
    );
};

export default ErrorPage;