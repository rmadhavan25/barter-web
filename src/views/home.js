import { Link } from 'react-router-dom';

const home = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    return ( 
        <div className="home">
            <h1>BARTER HOME</h1>
            <div className="menu">
                <ul>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/myProducts">myProducts</Link></li>
                    <li><Link to="/bookmarks">bookmarks</Link></li>
                    <li><Link to="/requestedList">requestedList</Link></li>
                    <li><Link to="/transactionHistory">transactionHistory</Link></li>
                    <li><Link to="/queriesAndComplaints">queriesAndComplaints</Link></li>
                </ul>
            </div>
        </div>
    
     );
}
 
export default home;