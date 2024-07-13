import './navBar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { GoHomeFill } from "react-icons/go";
import { MdLibraryBooks } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { IoMailUnread } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";

function NavBar() {
    return (
        <div className="Nav-container">
            <Link to="/" className="icon">
                <GoHomeFill />
            </Link>
            <Link to="/Content" className="icon">
                <MdLibraryBooks />
            </Link>
            <Link to="/Users" className="icon">
                <MdGroups />
            </Link>
            <Link to="/Inquiry" className="icon">
                <IoMailUnread />
            </Link>
            <Link to="/Analytics" className="icon">
                <VscGraph />
            </Link>
        </div>
    );
}

export default NavBar;
