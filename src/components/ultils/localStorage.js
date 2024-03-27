import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data, listType, actionType) => {
    const readList = JSON.parse(localStorage.getItem('readList')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const isBookInReadList = readList.some(item => item.bookId === data.bookId);
    const isBookInWishlist = wishlist.some(item => item.bookId === data.bookId);

    if (actionType === 'Read') {
        if (!isBookInReadList) {
            readList.push(data);
            localStorage.setItem('readList', JSON.stringify(readList));
            toast.success(`Book Added To ${listType}`);
        } else {
            toast.error(`Book Already in Read` );
        }
    } else if (actionType === 'Wishlist') {
        if (!isBookInWishlist && !isBookInReadList) {
            wishlist.push(data);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            toast.success(`Book Added To ${listType}`);
        } else if (isBookInWishlist) {
            toast.error(`Book Already in Wishlist`);
        } else {
            toast.error(`Book Already in Read`);
        }
    }
};
