import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../ultils/localStorage";

const useLocalStorage = () => {
        const [localData,setLocalData] = useState([]);
        useEffect(()=>{
            setLocalData(getFromLocalStorage());
        },[]);
        return {localData};
 }; 

export default useLocalStorage;
