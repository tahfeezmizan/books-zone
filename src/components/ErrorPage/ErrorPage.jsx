import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <div className="flex flex-col justify-center items-center">
                <h1>Oops!!!</h1>
                <h3>Page Not Found</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur quia vero non magnam, accusamus nam, quod harum eius omnis laboriosam optio! Sequi odio nemo aperiam voluptates incidunt facilis quod.</p>
                <NavLink to="/" className="btn bg-green-400 text-white">Back To Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;