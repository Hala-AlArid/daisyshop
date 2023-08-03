import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./index.scss";
import HomePage from "./pages/HomePage.tsx";
import About from "./pages/About.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StoreProvider } from "./Store";
import SigninPage from "./pages/SigninPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import ShippingAddressPage from "./pages/ShippingAddressPage.tsx";
import PaymentMethodPage from "./pages/PaymentMethodPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute";
import PlaceOrderPage from "./pages/PlaceOrderPage.tsx";
import OrderPage from "./pages/OrderPage.tsx";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderHistoryPage from "./pages/OrderHistoryPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import Search from "./pages/Search.tsx";
import Products from "./pages/Products.tsx";
import BestsellerProducts from "./pages/BestsellerProducts.tsx";
import SaleProducts from "./pages/SaleProducts.tsx";
import ShopPage from "./pages/ShopPage.tsx";
import Admin from "./pages/Admin.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="product/:_id" element={<ProductPage />} />
      <Route path="signin" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="search" element={<Search />} />
      <Route path="category/:category" element={<Products />} />
      <Route path="bestsellers" element={<BestsellerProducts />} />
      <Route path="sale" element={<SaleProducts />} />
      <Route path="products" element={<ShopPage />} />
      <Route path="" element={<ProtectedRoute />}>
        <Route path="admin" element={<Admin />} />
        <Route path="shipping" element={<ShippingAddressPage />} />
        <Route path="payment" element={<PaymentMethodPage />} />
        <Route path="placeorder" element={<PlaceOrderPage />} />
        <Route path="/order/:id" element={<OrderPage />} />
        <Route path="/orderhistory" element={<OrderHistoryPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreProvider>
      <PayPalScriptProvider options={{ clientId: "sb" }} deferLoading={true}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </HelmetProvider>
      </PayPalScriptProvider>
    </StoreProvider>
  </React.StrictMode>
);
