import { useParams , Link} from "react-router-dom";

const ProductDetails = ()=>{
    const params = useParams();
    

    return <>
        <h1>Product Details Page</h1>
    <p>{params.productId}</p>
    <p><Link to='..' relative="path">Back</Link></p>
    </>
}

export default ProductDetails;