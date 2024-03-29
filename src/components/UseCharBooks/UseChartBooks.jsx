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
            // console.log(books)
            for (const id of storedBookIds){
              // const chartBook = books?.find(book => book === id);
              console.log(id)
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