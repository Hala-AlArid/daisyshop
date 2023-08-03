import { Carousel, CarouselItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import ProductItem from "../components/ProductItem";
import { useGetProductsQuery } from "../hooks/productHooks";
import { useGetCategoryQuery } from "../hooks/CategoryHooks";
import { useGetWebsiteInfoQuery } from "../hooks/WebsiteInfoHooks";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
  const { data: products } = useGetProductsQuery();
  const { data: info, isLoading, error } = useGetWebsiteInfoQuery();
  const [slideshow, setSlideshow] = useState([]);

  info?.map((i) => {
    localStorage.setItem("logo", i.name);
    localStorage.setItem("hero_image", i.hero_image);
    localStorage.setItem("slogan", i.slogan);
    localStorage.setItem("address", i.address);
    localStorage.setItem("background_image", i.background_image);
    localStorage.setItem("banner_image", i.banner_image);
    localStorage.setItem("banner_text", i.banner_text);
    localStorage.setItem("description", i.description);
    localStorage.setItem("email", i.email);
    localStorage.setItem("facebook", i.facebook);
    localStorage.setItem("instagram", i.instagram);
    localStorage.setItem("phone_number", i.phone_number);
    localStorage.setItem("tiktok", i.tiktok);
    localStorage.setItem("twitter", i.twitter);
  });

  const { data: categories } = useGetCategoryQuery();
  const navigate = useNavigate();

  const handleCategoryClick = (catID: string) => {
    console.log(catID);
    navigate(`category/${catID}`);
    window.location.reload();
  };

  const rightBtn = document.querySelector(".right-button");
  const leftBtn = document.querySelector(".left-button");

  rightBtn?.addEventListener("click", function (event) {
    const content = document.querySelector("#carousel");
    content!.scrollLeft += 40;
    event.preventDefault();
  });

  leftBtn?.addEventListener("click", function (event) {
    const content = document.querySelector("#carousel");
    content!.scrollLeft -= 40;
    event.preventDefault();
  });

  return (
    <div className="home d-flex flex-column w-100">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section
        className="hero w-100 mt-0 d-flex flex-column p-5 align-items-lg-start justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${localStorage.getItem("hero_image")})`,
        }}
      >
        <div className="text-center text-lg-start">
          <h1>Welcome to Daisy's</h1>
          <h2>{localStorage.getItem("slogan")}</h2>
          <button className="mt-2" onClick={() => navigate("/products")}>
            Shop Now
          </button>
        </div>
      </section>

      <section className="category-section d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-5">Shop By Category</h3>

        <div className="category-container d-flex flex-column flex-lg-row gap-5 justify-content-center align-items-center">
          {categories?.map((cat) => (
            <div
              id={cat.category}
              key={cat.category}
              onClick={() => handleCategoryClick(cat.category)}
              className="category-card d-flex flex-column p-0 justify-content-center align-items-center"
            >
              <Link to="/">
                <div className="overlay-container">
                  <img src={cat.image} className="overlay-image"></img>
                  <div className="overlay">
                    <div className="text">{cat.category}</div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="slideshow">
        {info?.map((i) => (
          <Carousel fade interval={2000} className="m-0 w-100" key={i._id}>
            <CarouselItem>
              <div
                className="slideshow-item"
                style={{
                  backgroundImage: `url(${i.slideshow_images[0]})`,
                }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="slideshow-item"
                style={{
                  backgroundImage: `url(${i.slideshow_images[1]})`,
                }}
              ></div>
            </CarouselItem>
            <CarouselItem>
              <div
                className="slideshow-item"
                style={{
                  backgroundImage: `url(${i.slideshow_images[2]})`,
                }}
              ></div>
            </CarouselItem>
          </Carousel>
        ))}
      </section>

      <section className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-5">Our Bestsellers</h3>
        <div className="d-flex flex-row justify-content-center align-items-center w-100">
          <i className="fa fa-arrow-left mx-md-5 mx-2 left-button"></i>

          <div className="carousel d-flex flex-row">
            {products?.map((product) =>
              product.bestseller === true ? (
                <div key={product._id} className="product-img-div-carousel">
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image}
                      className="product-img-carousel"
                      alt={product.name}
                    />
                  </Link>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
          <i className="fa fa-arrow-right mx-md-5 mx-2 right-button"></i>
        </div>
        <button
          className="carousel-btn"
          onClick={() => navigate("/bestsellers")}
        >
          See More
        </button>
      </section>

      <section
        className="banner"
        style={{
          backgroundImage: `url(${localStorage.getItem("background_image")})`,
        }}
      ></section>

      <section className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-5">See What's on Sale</h3>
        <div className="d-flex flex-row justify-content-center align-items-center w-100">
          <div className="car d-flex flex-row">
            {products?.map((product) =>
              product.sale === true ? (
                <div className="product-img-div-carousel" key={product._id}>
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image}
                      className="product-img-carousel"
                      alt={product.name}
                    />
                  </Link>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
        <button className="carousel-btn" onClick={() => navigate("/sale")}>
          See More
        </button>
      </section>

      <section
        className="banner d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${localStorage.getItem("banner_image")})`,
        }}
      >
        <div>
          <h1>{localStorage.getItem("banner_text")}</h1>
        </div>
      </section>

      <section className="features flex-column flex-lg-row">
        <div>
          <div className="w-100">
            <i className="fa-solid fa-truck"></i>
          </div>
          <div>
            <p>Delivery all over Lebanon within 72 hours</p>
          </div>
        </div>

        <div>
          <div>
            <i className="fa-solid fa-gem"></i>
          </div>
          <div>
            <p>Finest edit of luxury brands</p>
          </div>
        </div>

        <div>
          <div>
            <i className="fas fa-tshirt"></i>
          </div>
          <div>
            <p>
              Exclusive capsule collections that you won't find anywhere else
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
