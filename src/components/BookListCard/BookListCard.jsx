import { CiLocationOn } from "react-icons/ci";
import { BiFile } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
const BookListCard = ({ data }) => {
    const { bookName, author, image, review, totalPages, rating, category, ags, publisher, yearOfPublishing, tags } = data || {};
    return (
        <div>
            <div class="card card-side bg-base-100 shadow-xl w-full h-full mt-20 max-sm:flex max-sm:flex-col  relative">
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
                        <CiLocationOn></CiLocationOn>
                        <h1 className='font-base flex '><span className=' flex gap-2'>Yearofpublishing :</span>{yearOfPublishing}</h1>
                    </div>
                    <div className='flex gap-10 text-base text-gray-400'>
                        <h className="flex gap-2"><FaUserFriends></FaUserFriends>Publisher: {publisher}</h>
                        <h className="flex gap-2"><BiFile></BiFile>Page {totalPages}</h>
                    </div>
                    <div className='outline-dashed outline-1 text-gray-300 mt-5'></div>
                    <div class="card-actions mt-2 justify-start flex gap-5">
                        <button className='btn rounded-full px-8 py-2 bg-sky-200 text-sky-400  font-bold'>Catagory:{category}</button>
                        <button className='btn rounded-full px-8 py-2 bg-yellow-100 text-yellow-400  font-bold'>Rating:{rating}</button>
                        <button className='btn rounded-full px-8 py-2 bg-green-500 text-white  font-bold'>View Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookListCard;