import { Key, useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../Store";
import { CartItem } from "../types/Cart";
import { Product } from "../types/Product";
import { convertProductToCartItem } from "../utils";

function ProductItem({ product }: { product: Product }) {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = (item: CartItem) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    toast.success("Product added to the cart");
  };
  return (
    <Card className="product-card">
      <Link to={`/product/${product._id}`} className="product-img-div">
        <img
          src={product.image}
          className="card-img-top product-img"
          alt={product.name}
        />
      </Link>
      <Card.Body className="card-body align-items-center align-items-md-start">
        <Link to={`/product/${product._id}`} className="nav-link">
          <Card.Title>{product.name}</Card.Title>
        </Link>
        {/* <Rating rating={product.rating} numReviews={product.numReviews} /> */}
        <Card.Text className="nav-link">${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button
            className="CardBtn"
            onClick={() => addToCartHandler(convertProductToCartItem(product))}
          >
            <span className="nav-link">Add to cart</span>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
