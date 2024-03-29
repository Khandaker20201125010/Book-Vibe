import { Outlet } from "react-router-dom";
import Header from "../Pages/Home/Header/Header";
const Root = () => {
    return (
        <div className="lg:container lg:mx-auto sm:container sm:mx-auto fonty">    
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;