import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";
import Home from "../Pages/Home/Home";



const Root = () => {
    return (
        <div className="lg:container lg:mx-auto sm:container sm:mx-auto fonty">    
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;