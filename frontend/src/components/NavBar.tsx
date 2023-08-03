import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useContext, useEffect } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../Store";
import { useGetCategoryQuery } from "../hooks/CategoryHooks";

function NavBar() {
  const {
    state: { mode, cart, userInfo },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  const signoutHandler = () => {
    dispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  const { data: categories, isLoading, error } = useGetCategoryQuery();

  const navigate = useNavigate();

  const handleCategoryClick = (catID: string) => {
    console.log(catID);
    navigate(`category/${catID}`);
    window.location.reload();
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar d-block d-lg-flex justify-content-lg-center"
      >
        <Container className="m-0 mw-100">
          {/* for small screens */}
          <div className="nav-container-div d-lg-none">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          </div>

          <Navbar.Brand
            href="/"
            className="nav-container-div text-center d-lg-none m-0"
          >
            {localStorage.getItem("logo")}
          </Navbar.Brand>

          <Nav className="nav-container-div flex-row gap-2 d-lg-none justify-content-end">
            {userInfo ? (
              <NavDropdown
                className="nav-link p-0"
                title={`Hello, ${userInfo.name}`}
              >
                {userInfo.isAdmin ? (
                  <Link to="/admin" className="dropdown-item">
                    Dashboard
                  </Link>
                ) : (
                  <></>
                )}
                <Link className="dropdown-item" to="/">
                  Home
                </Link>
                <Link className="dropdown-item" to="/profile">
                  User Profile
                </Link>
                <Link className="dropdown-item" to="/cart">
                  Cart
                  <span className="m-1 text-danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                </Link>
                <Link className="dropdown-item" to="/search">
                  Search
                </Link>
                <Link className="dropdown-item" to="/orderhistory">
                  Order History
                </Link>
                <Link
                  to="#"
                  className="dropdown-item"
                  onClick={switchModeHandler}
                >
                  Theme
                  <i
                    className={
                      mode === "light"
                        ? "fa fa-sun text-dark m-1"
                        : "fa fa-moon text-light m-1"
                    }
                  ></i>
                </Link>
                <NavDropdown.Divider />
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  {" "}
                  Sign Out{" "}
                </Link>
              </NavDropdown>
            ) : (
              <NavDropdown className="nav-link p-0" title={`Menu`}>
                <Link className="dropdown-item" to="/">
                  Home
                </Link>
                <Link className="dropdown-item" to="/search">
                  Search
                </Link>
                <Link className="dropdown-item" to="/signin">
                  Sign in
                </Link>
                <Link className="dropdown-item" to="/cart">
                  Cart
                  <span className="m-1 text-danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                </Link>
                <Link
                  to="#"
                  className="dropdown-item"
                  onClick={switchModeHandler}
                >
                  Theme
                  <i
                    className={
                      mode === "light"
                        ? "fa fa-sun text-dark m-1"
                        : "fa fa-moon text-light m-1"
                    }
                  ></i>
                </Link>
              </NavDropdown>
            )}
          </Nav>

          {/* for large screens */}

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-between gap-5"
          >
            <Nav className="nav-container-div">
              <Link to="/products" className="nav-link">
                SHOP
              </Link>
              <Link to="/bestsellers" className="nav-link">
                BESTSELLERS
              </Link>
              <Link to="/sale" className="nav-link">
                SALE
              </Link>
              <NavDropdown
                title="CATEGORIES"
                className="dropdown-menu-left"
                id="collasible-nav-dropdown"
              >
                {categories?.map((cat) => (
                  <NavDropdown.Item
                    id={cat.category}
                    key={cat.category}
                    className="category"
                    onClick={() => handleCategoryClick(cat.category)}
                  >
                    {cat.category}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>

            <Navbar.Brand
              href="/"
              className="nav-container-div text-center  d-none d-lg-block m-0"
            >
              {localStorage.getItem("logo")}
            </Navbar.Brand>

            <Nav className="nav-container-div d-none d-lg-flex justify-content-end gap-2">
              {userInfo ? (
                <NavDropdown
                  className="nav-link p-0"
                  title={`Hello, ${userInfo.name}`}
                >
                  {userInfo.isAdmin ? (
                    <Link to="/admin" className="dropdown-item">
                      Dashboard
                    </Link>
                  ) : (
                    <></>
                  )}
                  <Link className="dropdown-item" to="/">
                    Home
                  </Link>
                  <Link className="dropdown-item" to="/search">
                    Search
                  </Link>
                  <Link className="dropdown-item" to="/profile">
                    User Profile
                  </Link>
                  <Link className="dropdown-item" to="/orderhistory">
                    Order History
                  </Link>
                  <Link className="dropdown-item" to="/cart">
                    Cart
                    <span className="m-1 text-danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  </Link>
                  <Link
                    to="#"
                    className="dropdown-item"
                    onClick={switchModeHandler}
                  >
                    Theme
                    <i
                      className={
                        mode === "light"
                          ? "fa fa-sun text-dark m-1"
                          : "fa fa-moon text-light m-1"
                      }
                    ></i>
                  </Link>
                  <NavDropdown.Divider />
                  <Link
                    className="dropdown-item"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    {" "}
                    Sign Out{" "}
                  </Link>
                </NavDropdown>
              ) : (
                <Nav className="nav-container-div d-none d-lg-flex justify-content-end gap-2">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>

                  <Link to="/search" className="nav-link">
                    Search
                  </Link>

                  <Link to="/signin" className="nav-link">
                    Sign in
                  </Link>

                  <Link to="/cart" className="nav-link header-link">
                    <i
                      className={
                        mode === "light"
                          ? "fa-solid fa-shopping-cart text-dark"
                          : "fa-solid fa-shopping-cart text-light"
                      }
                    >
                      {
                        <span className="cart-badge">
                          {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                        </span>
                      }
                    </i>
                  </Link>

                  <Link
                    to="#"
                    className="nav-link header-link"
                    onClick={switchModeHandler}
                  >
                    <i
                      className={
                        mode === "light"
                          ? "fa fa-sun text-dark"
                          : "fa fa-moon text-light"
                      }
                    ></i>
                  </Link>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
