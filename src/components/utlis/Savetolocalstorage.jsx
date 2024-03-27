import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Savetolocalstorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("Booklist") || "[]");
    const existedData = saveData.find((item )=> item.Id == data.Id);
    if (!existedData) {
        saveData.push(data);
        localStorage.setItem("Booklist", JSON.stringify(saveData));
       
    } else {
        toast.success('Books Added To Read List', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
           
            });
    }
};
    
export default Savetolocalstorage;
