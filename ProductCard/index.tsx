import "./styles.css";

function ProductCard({
  customContents: {
    imageUrl,
    productTitle,
    sellingPrice,
    productLogoImage,
    scratchedPrice,
    currencyPrice,
    buttonText,
    productLink,
    addToCartFunction,
  },
}: ProductCardProps) {
  return (
    <div className="cardContainer">
      <a className="cardLink" href={productLink}>
        <div className="topSubcontainer">
          <div className="imageContainer">
            <img src={imageUrl} alt={productTitle} />
          </div>
          <div className="titleContainer">
            <h2>{productTitle}</h2>
          </div>
        </div>
        <div className="bottomSubcontainer">
          {productLogoImage && (
            <img
              className="productLogoImage"
              src={productLogoImage}
              alt={productTitle}
            />
          )}
          <div className="priceContainer">
            {scratchedPrice && (
              <span>
                {currencyPrice} {scratchedPrice}
              </span>
            )}
            <p>
              {currencyPrice} {sellingPrice}
            </p>
          </div>
        </div>
      </a>
      <div className="buttonContainer">
        <button onClick={addToCartFunction}>{buttonText}</button>
      </div>
    </div>
  );
}

export default ProductCard;
