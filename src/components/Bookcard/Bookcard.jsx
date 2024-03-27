import { Link } from "react-router-dom";
import icon from "../../assets/images/grade_FILL0_wght400_GRAD0_opsz24.png";

const Bookcard = ({item}) => {
    const  {bookId,bookName,author,image,review,totalPages,rating,category,ags,publisher,yearOfPublishing,tags} = item ||{}; 
    return (
        <Link to={`/Bookdetails/${bookId}`}>
        <div>
            <div class="card w-full h-full bg-base-200 shadow-2xl p-10">
                <figure><img className="h-[200px]" src={image} alt="Shoes" /></figure>
                <div class="card-body">
                <div className=" mb-2">
                        {tags.map((tag, index) => (
                            <span key={index} className=" rounded-full px-3 py-1  font-semibold text-green-500 mr-2">{tag}</span>
                        ))}
                    </div>
                    <h1 className='text-2xl font-bold'>{bookName}</h1>
                    <p className='font-bold '>By:{author}</p>
                    <br />
                    <div className='outline-dashed outline-1 text-gray-300 mt-5'></div>
                    <div class="card-actions justify-between">
                        <h3>{category}</h3>
                        <div className="flex gap-2">
                        <h3>{rating}</h3>
                        <img src={icon} alt="" />
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Bookcard;