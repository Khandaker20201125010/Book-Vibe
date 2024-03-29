import { useEffect, useState } from "react";
import Booksdata from "../Hooks/Booksdata";

import { getFromLocalStorage } from "../ultils/localStorage";
const UseChartBooks = () => {
    const books = Booksdata();
    
    const [bookSave,setBookSave] =useState([])
      useEffect(()=>{
        const storedBookIds = getFromLocalStorage();
     
        if(books.length >1){
            const savedBook = ([])
            console.log(books);
        
            for (const id of storedBookIds){
              const book = books?.find(book => book === id);
                if(book){
                  savedBook.push(book);
                   
                }
   
            }  
            setBookSave(savedBook);
        }
       

      },[books])
    return bookSave  ;  
};

export default UseChartBooks;