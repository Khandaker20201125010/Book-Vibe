import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useBooksdata from '../Hooks/Booksdata'
const Bookdetails = () => {
    const [singleData, setSingleData] = useState({});
    const { bookId } = useParams();
    const { data, loading } = useBooksdata()
    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item.bookId == bookId);
            setSingleData(singleData);

        }

    }, [data, bookId]);
    const { bookName, author, image, review, totalPages, rating, category, ags, publisher, yearOfPublishing, tags } = singleData || {};


    return (
        <div className=''>
            <div class="card lg:card-side bg-base-100 shadow-xl mt-20">
                <figure><img className='w-full h-[500px]' src={image} alt="Album" /></figure>
                <div class="card-body w-1/2">
                    <h2 class="card-title text-4xl font-bold">{bookName}</h2>
                    <h3 className='gap-5 font-bold mt-5'>By:<span>{author}</span></h3>
                    <h3 className='font-bold mt-10'>{category}</h3>
                    <p className='w-3/4 mt-10'><span className='font-bold'>Review:</span>{review}</p>
                    <div className=" mb-2 flex mt-10">
                        <h1>Tag:</h1>
                        {tags && tags.length > 0 && tags.map((tag, index) => (
                            <span key={index} className="rounded-full px-6  font-semibold text-green-500 mr-2 inline-block">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className=''>
                    <div className='flex gap-20 mt-5'>
                        <h3>Number of pages:</h3>
                        <h3 className='font-bold'>{totalPages}</h3>
                    </div>
                    <div className='flex gap-32 mt-5'>
                        <h3>Publisher:</h3>
                        <h3 className='font-bold'>{publisher}</h3>
                    </div>
                    <div className='flex gap-20 mt-5'>
                        <h3>Year of Publishing:</h3>
                        <h3 className='font-bold'>{yearOfPublishing}</h3>
                    </div>
                    <div className='flex gap-40 mt-5'>
                        <h3>Rating:</h3>
                        <h3 className='font-bold'>{rating}</h3>
                    </div>

                    </div>
                    
                    <div class="card-actions justify-start gap-10 mt-10">
                        <button class="btn btn-outline">Listen</button>
                        <button class="btn w-32 btn-info">Listen</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bookdetails;