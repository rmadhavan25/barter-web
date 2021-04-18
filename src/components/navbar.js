import { Link } from 'react-router-dom';

const navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <ul className="topnav">
                    <li className="logo" ><Link to="/">BARTER</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    );
}
 
export default navbar;