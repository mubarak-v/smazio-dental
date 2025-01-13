'use client';
import { useEffect } from 'react';
import Clinic from "../data/clinics"; // Import the Clinic data
import Image from 'next/image';

// Helper function to group clinics into chunks of 2
function chunkArray<T>(array: T[], chunkSize: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}

function CardCarousel() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then((bootstrap) => {
            const carouselElement = document.getElementById('cardCarousel');
            if (carouselElement) {
                new bootstrap.Carousel(carouselElement, {
                    interval: 3000, // Auto-slide every 3 seconds
                    ride: 'carousel',
                });
            }
        });
    }, []);

    // Group clinics into chunks of 2
    const clinicChunks = chunkArray(Clinic, 2);

    return (
        <div className="container mt-5">
            <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                {/* Indicators */}
                <div className="carousel-indicators">
                    {clinicChunks.map((_, index) => (
                        <button
                        style={{display:"none"}}
                            key={index}
                            type="button"
                            data-bs-target="#cardCarousel"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    {clinicChunks.map((chunk, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <div className="row justify-content-center">
                                {chunk.map((location) => (
                                    <div className="col-md-6" key={location.id}>
                                        <div className="card">
                                            <Image
                                                className="card-img-top"
                                                src={location.image[0]} // Show the first image
                                                alt={location.name}
                                                width={400}
                                                height={200} // Adjust dimensions as needed
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{location.name}</h5>
                                                <p className="card-text">
                                                    {location.description || "No description available."}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
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
    );
}

export default CardCarousel;
