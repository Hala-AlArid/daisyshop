import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";

export default function SaleProducts() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <div className="products-row">
      <Helmet>{<title>Sale</title>}</Helmet>

      {products!.map((product) =>
        product.sale === true ? (
          <ProductItem key={product._id} product={product} />
        ) : (
          <></>
        )
      )}
    </div>
  );
}
