import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const productId = params.productId;

  return (
    <>
      <h1>Product Detail</h1>
      <p>{productId}</p>
      <p><Link to='..' relative='path'>Back</Link></p>
    </>
  )
}

export default ProductDetail;