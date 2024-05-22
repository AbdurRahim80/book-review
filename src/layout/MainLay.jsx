import React from 'react';
import Nav from '../coponents/navbar/Nav';
import { Outlet } from 'react-router-dom';

const MainLay = () => {
    return (
        <div className='max-w-screen-lg mx-auto font_inter'>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default MainLay;