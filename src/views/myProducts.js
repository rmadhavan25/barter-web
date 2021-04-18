import { useEffect,useState } from "react";
import ProductList from '../components/productList';
import { Link } from 'react-router-dom';

const MyProducts = () => {

    const [products, setProducts] = useState(null);
    let phno = 1234567892;

    useEffect(() => {
        fetch(`http://localhost:3000/myProducts?productOwnerPhone=${phno}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProducts(data);
            console.log(data);
        })
    },  [phno])
    return ( 
        <div className="MyProducts">
            <h1>MyProducts Page</h1>
            <div className='add-product-btn'>
                <Link to="#"><h3>+ ADD PRODUCT</h3></Link>
            </div>
            {products>0?<ProductList products={products} />:<h2>No Products are available</h2>}
        </div>
     );
}
 
export default MyProducts;