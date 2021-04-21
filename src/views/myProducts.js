import { useEffect,useState } from "react";
import ProductList from '../components/productList';
import { Link } from 'react-router-dom';

const MyProducts = () => {

    const [products, setProducts] = useState({});
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch(`http://localhost:3000/myProducts`,{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProducts(data);
            console.log(data);
        })
    },  [token])
    return ( 
        <div className="MyProducts">
            <h1>MyProducts Page</h1>
            <div className='add-product-btn'>
                <Link to="/addNewProduct"><h3>+ ADD PRODUCT</h3></Link>
            </div>
            {products.length>0?<ProductList products={products} />:<h2>No Products are available</h2>}
        </div>
     );
}
 
export default MyProducts;