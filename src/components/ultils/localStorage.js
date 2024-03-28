import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveToLocalStorage = (data, listType) => {
    let readList = JSON.parse(localStorage.getItem('readList')) || [];
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const isBookInReadList = readList.some(item => item.bookId === data.bookId);
    const isBookInWishlist = wishlist.some(item => item.bookId === data.bookId);

    if (listType === 'Read') {
        if (!isBookInReadList) {
            readList.push(data);
            localStorage.setItem('readList', JSON.stringify(readList));
            const matchingIndex = wishlist.findIndex(item => item.bookId === data.bookId);
            if (matchingIndex !== -1) {
                wishlist.splice(matchingIndex, 1);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                toast.info(`Removed From Wishlist Books`);
            }
            toast.success(`Book Added To Read`);
        } else {
            toast.error(`Book Already in Read`);
        }
    } else if (listType === 'Wishlist') {
        if (readList.length === 0 || !isBookInReadList) {
            if (!isBookInWishlist) {
                wishlist.push(data);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                toast.success(`Book Added To Wishlist`);
            } else {
                toast.error(`Book Already in Wishlist`);
            }
        } else {
            toast.error(`Cannot add to Wishlist. Interact with Read list first.`);
        }
    }
};


export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('readList')) || [];
    return (data);
}
export const getFromWocalStorage = () => {
    const jata = JSON.parse(localStorage.getItem('wishlist')) || [];
    return (jata);
}