import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="footer text-center text-lg-start text-muted border-top mb-3">
      <section className="">
        <MDBContainer className="text-center">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="secondary" icon="gem" className="me-3" />
                {localStorage.getItem("logo")}
              </h6>
              <p>{localStorage.getItem("description")}</p>
              <section className="d-flex justify-content-center p-4 text-center">
                <div className="socials text-center d-flex justify-content-center align-items-center gap-3">
                  <a
                    href={localStorage.getItem("facebook")!}
                    className="socials text-reset"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href={localStorage.getItem("twitter")!}
                    className="socials text-reset"
                    target="_blank"
                  >
                    <i className="fa-brands  fa-twitter"></i>
                  </a>
                  <a
                    href={localStorage.getItem("tiktok")!}
                    className="socials text-reset"
                    target="_blank"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                  <a
                    href={localStorage.getItem("instagram")!}
                    className="socials text-reset"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </section>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto">
              <h6 className="text-uppercase fw-bold mb-4"></h6>
              <p>
                <a href="/" className="footer-link">
                  Home
                </a>
              </p>
              <p>
                <a href="/cart" className="footer-link">
                  Cart
                </a>
              </p>
              <p>
                <a href="/orderhistory" className="footer-link">
                  Orders
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto">
              <h6 className="text-uppercase fw-bold mb-4"></h6>
              <p>
                <a href="/search" className="footer-link">
                  Search
                </a>
              </p>
              <p>
                <a href="/bestsellers" className="footer-link">
                  Bestsellers
                </a>
              </p>
              <p>
                <a href="/sale" className="footer-link">
                  Sale
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>

              <div className="d-flex justify-content-center align-items-center">
                <MDBIcon color="secondary" icon="home" className="me-3" />
                <p className="m-0">{localStorage.getItem("address")}</p>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                <p className="m-0">{localStorage.getItem("email")}</p>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                <p className="m-0">{localStorage.getItem("phone_number")}</p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center mt-3">
        ©{localStorage.getItem("logo")} 2023 Copyright
      </div>
    </MDBFooter>
  );
}
