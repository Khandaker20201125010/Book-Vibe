import { useEffect, useState } from "react";
import BookListCard from "../BookListCard/BookListCard";
import useLocalStorage from "../Hooks/Bookshow/useLocalStorage";
import wishLocalStorage from "../Hooks/Bookshow/wishLocalStorage";
import WishListCard from "../WishListCard/WishListCard";
import { useLoaderData } from "react-router-dom";

const Booklist = () => {
    
    const { localData } = useLocalStorage();
    const { wishlData } = wishLocalStorage();
    const [bookReads, setBookReads] = useState([]);
        // let listSort = [] ;
        // useEffect(() => {
        //     const storedReadBooks = useLocalStorage();
        //     console.log(storedReadBooks)
        //     if (books.length > 0) {
        //         const booksRead = [];
        //         for (const id of storedReadBooks) {
        //             const book = books.find(book => book.bookId === id);
        //             if (book) {
        //                 booksRead.push(book);
        //             }
        //         }
        //         setBookReads(booksRead);
        //     }
        // }, [books]);
        // const handleBooksFilter = (filter) => {

        //     if (filter === 'bookId') {
        //         const sortList = bookReads.map(name => name)
        //         sortList.sort();
        //         sortList.reverse();
        //         setBookReads(sortList);
        //     }
        //     else if (filter === 'totalPages') {
        //         const sortedName = bookReads.map(name => name.totalPages);
        //         sortedName.sort();
        //         sortedName.reverse();

        //         const sortList = bookReads.map(name => name);

        //         for (const singleName of sortedName) {
        //             for (const objName of sortList) {
        //                 if (singleName === objName.totalPages) {
        //                     listSort.push(objName);
        //                     setBookReads(listSort);
        //                 }
        //             }
        //         }
        //     }
        //     else if (filter === 'rating') {
        //         const sortRating = bookReads.map(rating => rating.rating);
        //         console.log(sortRating)
        //         sortRating.sort();
        //         sortRating.reverse();

        //         const sortObj = bookReads.map(rating => rating);

        //         for (const sortedRating of sortRating) {
        //             for (const sortedObj of sortObj) {
        //                 if (sortedRating === sortedObj.rating) {
        //                     listSort.push(sortedObj)
        //                     setBookReads(listSort)
        //                 }
        //             }
        //         }
        //     }
        //     else if (filter === 'yearOfPublishing') {
        //         const sortRating = bookReads.map(rating => rating.rating);
        //         console.log(sortRating)
        //         sortRating.sort();
        //         sortRating.reverse();

        //         const sortObj = bookReads.map(rating => rating);

        //         for (const sortedRating of sortRating) {
        //             for (const sortedObj of sortObj) {
        //                 if (sortedRating === sortedObj.rating) {
        //                     listSort.push(sortedObj)
        //                     setBookReads(listSort)
        //                 }
        //             }
        //         }
        //     }
        // }

    return (
        <div>
            <div className='text-center items-center mt-20'>
                <h1 className='text-2xl font-bold'>Books</h1>
                <ul class="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className='bg-green-500 hover:bg-green-500 font-bold text-white '>
                                Short by
                            </summary>
                            <ul class="p-2 bg-base-100 rounded-t-none ">
                                <li onClick={() => handleBooksFilter('rating')}><a className='bg-green-500 hover:bg-green-500 text-white'>Rating</a></li>
                                <li onClick={() => handleBooksFilter('totalPages')}><a className='bg-green-500 hover:bg-green-500 text-white w-40 mt-1'>Number of Pages</a></li>
                                <li onClick={() => handleBooksFilter('yearOfPublishing')}><a className='bg-green-500 hover:bg-green-500 text-white mt-1'>Publishing Year</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
                <div>

                    <div role="tablist" class="tabs tabs-lifted">
                        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Read Books" />
                        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 text-start ">
                            {localData.map((data) => (<BookListCard key={data.bookid} data={data}></BookListCard>))}
                        </div>

                        <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Wishlist Books" checked />
                        <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6 text-start ">
                            {wishlData.map((jata) => (<WishListCard key={jata.bookid} jata={jata}></WishListCard>))}
                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default Booklist;