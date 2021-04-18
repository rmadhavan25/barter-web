import { useEffect,useState } from "react";
import ProductList from '../components/productList';

const Explore = () => {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProducts(data);
            //console.log(data);
        })
    },  [])
    return ( 
        <div className="explore">
            <h1>Explore Page</h1>
            {products && <ProductList products={products} />}
        </div>
     );
}
 
export default Explore;