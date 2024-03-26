import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 pb-20">
                <div className="bg-gray-50 rounded-3xl h-[600px] flex items-center justify-around ">
                    {/* banner text container  */}
                    <div className="">
                        <h1 className="text-4xl lg:text-5xl font-bold px-1">Books to freshen up your bookshelf</h1>
                        <button className="btn rounded-3xl px-8 border-none bg-green-400 text-xl font-semibold"><a
                        >Explore Now</a></button>
                    </div>
                    <div className="">
                        <img src="" alt="" />
                        <h1 className="text-4xl lg:text-5xl font-bold px-1">Books to freshen up </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;