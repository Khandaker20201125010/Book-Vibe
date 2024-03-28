import { useEffect, useState } from "react";
import {  getFromWocalStorage } from '../../ultils/localStorage';

const wishLocalStorage = () => {
    const [wishlData,setWishData] = useState([]);
    useEffect(()=>{
        setWishData(getFromWocalStorage ());
    },[]);
    return {wishlData};
   
};

export default wishLocalStorage;