import { NavLink } from "react-router-dom";

const Header = () => {
    const links = <>
        <li>  <NavLink
            className={({ isActive }) =>
                isActive ? 'btn btn-outline btn-success' : 'font-bold'
            }
            to='/'
        >
            Home
        </NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'btn btn-outline btn-success' : 'font-bold'
        } to="/Listed Books"
        >
            Listed Books
        </NavLink></li>

        <li><NavLink className={({ isActive }) =>
            isActive ? 'btn btn-outline btn-success' : 'font-bold'
        } to="/Pages to Read">
            Pages to Read</NavLink>
        </li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'btn btn-outline btn-warning' : 'font-bold'
        } to="/Premium">
            Premium</NavLink>
        </li>
        <li><NavLink className={({ isActive }) =>
            isActive ? 'btn btn-outline btn-error' : 'font-bold'
        } to="/Whychoseus">
           Why Chose Us</NavLink>
        </li>
    </>
    return (
        <div class="navbar bg-base-100 mt-10 font-bold ">
            <div class="navbar-start">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a class="text-xl">Book Vibe</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 gap-4">
                    {links}
                </ul>
            </div>
            <div class="navbar-end gap-5 ">
                <button className="btn bg-green-500 text-white w-28">Sign in</button>
                <button class="btn btn-info text-white w-28">Sign up</button>

            </div>
        </div>
    );
};

export default Header;