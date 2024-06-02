import styles from "./ItemDetails.module.css"

// ItemDetails component displays detailed information about the product
export function ItemDetails({ product }) {
    // Function to capitalise the first letter of a string
    const capitaliseFirstLetter = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <>
        {product && (
            <>
            <h2 data-testid="product-title">{product.title}</h2>
            <div className="d-md-flex my-4">
                
                {/* Dynamic rendering of image carousel */}
                <div className="col-md-6">
                    {product.images[1] ? (
                        <div id="carouselControls" className="carousel slide mb-3" data-bs-ride="carousel" aria-label="Product Images Carousel">
                            <div className="carousel-inner">
                                {product.images.map((img, i) => (
                                    <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                                        <img
                                            src={img}
                                            className={`d-block w-100 ${styles.productImage}`}
                                            alt={`Image of ${product.title} #${i + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev" aria-label="Previous Slide">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next" aria-label="Next Slide">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    ) : (
                        <img src={product.images[0]} alt={`Image of ${product.title}`} className={` mb-3 col-12 ${styles.productImage}`} />
                    )}
                    <div className="row row-cols-2">
                        <div className="col-3"><span className="fw-bold small">SKU</span></div>
                        <div className="col-9"><p className="small m-0">{product.sku}</p></div>
                        <div className="col-3"><span className="fw-bold small">Category</span></div>
                        <div className="col-9"><p className="small m-0">{capitaliseFirstLetter(product.category)}</p></div>
                    </div>
                </div>
                <div className="col-1"></div>

                {/* Product Details */}
                <div className="col-md-5 my-4">
                    <h4 className="fw-bold mb-4">${product.price}</h4>
                    <p className="mb-4">{product.description}</p>

                    <div className="linebreak mb-4"></div>

                    <div className="d-flex align-content-center mb-3">
                        <img src="/group.svg" alt="Truck icon" className="me-3" />
                        <p className="m-0">Free worldwide shipping on all overs over $100.00</p>
                    </div>

                    <div className="d-flex align-content-center mb-3">
                        <img src="/3d-rotate.svg" alt="Truck icon" className="me-3" />
                        <p className="m-0">Ships within 48 hours</p>
                    </div>

                    {/* Dynamic rendering of reviews */}
                    <h5 className="mb-3">Reviews</h5>
                    {product.reviews[0] ? (
                        <ul className="list-group">
                            {product.reviews.map((review, i) => (
                                <li key={i} className="list-group-item">
                                    <h5>{review.rating}/5</h5>
                                    <p>{review.comment}</p>
                                    <i>- {review.reviewerName}</i>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="">No Reviews Yet</div>
                    )}
                </div>
            </div>
            </>
        )}
        </>
    )
}