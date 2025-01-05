"use client";

import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";


export default function CarouselPage() {
  useEffect(() => {
    // Ensure the carousel is initialized after loading Bootstrap
    const carouselElement = document.querySelector('#cardCarousel');
    if (carouselElement) {
      const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 5000, // 5 seconds
        ride: "carousel",
      });
      console.log("Carousel initialized:", carousel);
    }
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQjAx8Jf4tYnBsguTF2O8r6jRtBoVEebq6UiwTEXzMdTMoMJ0pAyZet3g"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"
        crossOrigin="anonymous"
        onLoad={() => console.log("Bootstrap JS Loaded")}
      />

      <div className="container mt-5">
        <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card 1</h5>
                      <p className="card-text">Some quick example text for Card 1.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card 2</h5>
                      <p className="card-text">Some quick example text for Card 2.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card 3</h5>
                      <p className="card-text">Some quick example text for Card 3.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Card 4</h5>
                      <p className="card-text">Some quick example text for Card 4.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
