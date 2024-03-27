import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listedbook">Listed Books</NavLink></li>
        <li><NavLink to="/pageread">Pages to Read</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
    </>

    return (
        <div className="navbar w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
                        {links}
                        <button className="btn btn-active btn-primary">Sign In</button>
                        <button className="btn btn-active btn-primary">Sign Up</button>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl font-bold lexend">Books Zone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4 ">
                <button className="btn text-white bg-green-500">Sign In</button>
                <button className="btn bg-[#50B1C9] text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Navigation;