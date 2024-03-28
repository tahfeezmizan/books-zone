import React from 'react';
import bannerImg1 from'../../assets/banner-img.png'
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
            <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 pb-20">
                <div className="bg-gray-50 rounded-3xl h-[600px] flex flex-col md:flex-row text-center md:text-start items-center justify-around gap-10 md:gap-44 px-0 lg:px-28">
                    {/* banner text container  */}
                    <div className="">
                        <h1 className="text-4xl lg:text-6xl font-bold px-1 mb-12">Books to freshen up your bookshelf</h1>
                        <NavLink to="/listedbook" className="btn text-white rounded px-8 border-none bg-green-400 text-xl font-bold hover:bg-green-600"><a
                        >View The List</a></NavLink>
                    </div>
                    <div className="">
                        {/* <img src="../../assets/banner-img.png" alt="" /> */}
                        <img src={bannerImg1} className="max-w-lg rounded-lg " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;