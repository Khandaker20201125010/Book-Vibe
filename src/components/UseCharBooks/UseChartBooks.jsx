import { useEffect, useState } from "react";
import Booksdata from "../Hooks/Booksdata";

import { getFromLocalStorage } from "../ultils/localStorage";
import { useLoaderData } from "react-router-dom";
const UseChartBooks = () => {
  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const books = useLoaderData();
    const [bookSave,setBookSave] =useState([])
    const savedBook = [] 
      useEffect(()=>{
        const storedBookIds = getFromLocalStorage()
        if( storedBookIds.length > 0){       
            for (const id of storedBookIds){
                if(id){
                  savedBook.push(id);   
                  setBookSave(savedBook);   
                }
   
            }  
           
        }
       

      },[books])
    return bookSave  ;  
};

export default UseChartBooks;