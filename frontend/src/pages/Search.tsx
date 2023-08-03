import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ApiError } from "../types/ApiError";
import { getError } from "../utils";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";

export default function Search() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [term, setTerm] = useState("");

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <div>
      <Form className="d-flex align-items-center my-3 mx-auto w-75">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          id="Search-form"
          onChange={(e) => setTerm(e.target.value)}
        />
      </Form>
      <div className="products-row m-auto">
        <Helmet>
          <title>Search</title>
        </Helmet>
        {products!.map((product) => {
          if (
            term.split(" ").every((l) => product.name.toLowerCase().includes(l))
          )
            return <ProductItem key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
}
function ev(this: HTMLElement, ev: SubmitEvent) {
  throw new Error("Function not implemented.");
}
