import React from 'react';

const WishListCard = ({jata}) => {
    const { bookName, author, image, review, totalPages, rating, category, ags, publisher, yearOfPublishing, tags } = jata || {};
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl w-full h-full mt-20">
                <figure><img className='p-10 ' src={image} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{bookName}</h2>
                    <h2 className="font-bold flex items-center gap-2">
                        <span>By:</span>
                        <span>{author}</span>
                    </h2>
                    <div className=" mb-2 flex mt-10">
                        <h1 className='font-bold'>Tag</h1>
                        {tags && tags.length > 0 && tags.map((tag, index) => (
                            <span key={index} className="rounded-full px-6  font-semibold text-green-500 mr-2 inline-block">
                                #{tag}
                            </span>
                        ))}
                        <h1 className='font-base flex '><span className=' flex gap-2'>Yearofpublishing :</span>{yearOfPublishing}</h1>
                    </div>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">

                    </div>
                </div>
            </div>

        </div>
    );
};

export default WishListCard;