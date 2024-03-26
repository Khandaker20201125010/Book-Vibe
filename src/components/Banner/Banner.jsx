import React from 'react';
import ban from '../../assets/images/1.png';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className=' w-full shadow-2xl font-bold rounded-3xl'>
            <div className='flex'>
                <div className='w-[100%] p-28'>
                    <h1 className=' text-6xl '>Books to freshen up your bookshelf</h1>
                    <div >
                        <Link to = {`/Listed Books`}>
                        <button  className='btn bg-green-500 text-white mt-10'>
                        View The List
                        </button>
                        </Link>
                       
                    </div>
                </div>
                <div className='p-20 w-2/3'>
                    <img src={ban} alt="" />
                </div>
            </div>


        </div>
    );
};

export default Banner;
