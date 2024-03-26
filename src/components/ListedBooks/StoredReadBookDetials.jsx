
const StoredReadBookDetials = ({ data }) => {
    const { image, bookName, author, category, tags, yearOfPublishing, totalPages, publisher, rating, } = data;
    console.log(data.length)

    return (
        <div className="flex items-center gap-10 border p-6 mb-6 rounded-xl">
            <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-10">
                <img className="max-w-64 max-h-60 rounded" src={image} alt="" />
            </div>
            <div className="">
                <h2 className="text-2xl font-bold mb-4">{bookName}</h2>
                <p className='font-medium mb-4'>By: {author}</p>
                <div className="flex gap-4 items-center mb-4">
                    <h3 className='font-bold'>Tags:</h3>
                    {
                        tags?.map(tag => <span className='bg-green-100 rounded-full font-medium text-green-500 px-4 py-1'>#{tag}</span>)
                    }
                    <p>Year of Publishing: <span className='font-semibold'>{yearOfPublishing}</span></p>
                </div>
                <div className="flex gap-4 items-center pb-4 border-b">
                    <p>Publisher: {publisher}</p>
                    <p>Pages {totalPages}</p>
                </div>
                <div className="flex gap-4 items-center pt-4">
                    <button className="btn btn-sm px-5 rounded-full bg-blue-500 bg-opacity-20 text-blue-500">Category: {category}</button>
                    <button className="btn btn-sm px-5 rounded-full bg-yellow-400 bg-opacity-20 text-blue-500">Rating: {rating}</button>
                    <button className="btn btn-sm px-5 rounded-full bg-green-100 text-green-500">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default StoredReadBookDetials;