import React from 'react';
import Booksdata from '../Booksdata';
import Bookcard from '../../Bookcard/Bookcard';

const Bookshow = () => {
    const { data} = Booksdata(); 
    return (
        <div>
            <div>
                <h1 className='text-4xl text-center mt-20 font-bold'>Books</h1>
            </div>
            <div className='mt-20 grid grid-cols-3 gap-8'>
                {data.map ((item) => (<Bookcard key={item.bookId} item={item}></Bookcard>))}

            </div>
        </div>
    );
};

export default Bookshow;
