import React from 'react';

const SingleBooks = ({ books }) => {
    const { image, bookName, author, tags } = books;
    console.log(books);
    return (
        <div className="p-6 border border-gray-200 rounded-md">
            <div className="bg-gray-200 rounded-lg flex items-center justify-center p-10 mb-6">
                <img className="max-w-64 max-h-60 rounded" src={image} alt="" />
            </div>

            <div className="flex gap-4">
                {
                    tags.map(tag => <span className='bg-green-100 rounded-full font-medium text-green-500 px-4 py-2'>{tag}</span>)
                }
            </div>
            <h2 className="py-4 text-2xl font-bold">{bookName}</h2>
            <p>{author}</p>
            {/* <div className=" flex gap-5"> */}
            {/* <button className="btn btn-outline">{remote_or_onsite}</button> */}
            {/* <button className="btn btn-outline">{job_type}</button> */}
            {/* </div> */}
            {/* <div className=" flex gap-6"> */}
            {/* <p className="flex items-center gap-2"><IoLocationOutline className="text-xl" /> {location}</p> */}
            {/* <p className="flex items-center gap-2"><AiOutlineDollar className="text-xl" /> {salary}</p> */}
            {/* </div> */}
            {/*  */}
            {/* <NavLink to={`/job/${id}`} className="btn custom-button text-white" >View Details</NavLink> */}
        </div>
    );
};

export default SingleBooks;