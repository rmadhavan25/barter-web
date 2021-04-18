import { useEffect,useState } from "react";
import ProductList from '../components/productList';

const Bookmarks = () => {

    const [products, setProducts] = useState(null);
    let phno = 9655569935;

    useEffect(() => {
        fetch(`http://localhost:3000/bookmark?productOwnerPhone=${phno}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProducts(data);
            console.log(data);
        })
    },  [phno])
    return ( 
        <div className="Bookmarks">
            <h1>Bookmarks Page</h1>
            {products>0?<ProductList products={products} />:<h2>No Bookmarks are available</h2>}
        </div>
     );
}
 
export default Bookmarks;