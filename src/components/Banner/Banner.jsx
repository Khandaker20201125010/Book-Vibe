import React from 'react';
import ban from '../../assets/images/1.png'; 
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=" md:flex bg-gray-100 rounded-xl mt-10 px-2 py-5 md:px-14 lg:px-32 lg:py-10">
            <div className="lg:w-1/2 order-2 md:order-1 flex justify-end">
                <img src={ban} alt="" />
            </div>
            <div className="lg:w-1/2 mt-3 lg:mt-10">
                <h3 className=" text-3xl lg:text-5xl font-bold mt-9 mx-2">Books to freshen up
                    your bookshelf </h3>
                <Link to="/listBooks"><button className="btn text-white bg-green-500 lg:mt-20 mt-5 mx-2">View The List</button> </Link>
            </div>



        </div>
    );
};

export default Banner;
