import './styles.css'

function ProductCard({
  customContents: {
    imageUrl,
    productTitle,
    salePrice,
    currencyPrice,
    buttonText,
    productLink
  }
}: ProductCardProps) {
  return(
    <a className="cardLink" href={productLink}>
      <div className="cardContainer">
          <div className="topSubcontainer">
            <div className="imageContainer">
              <img src={imageUrl} alt={productTitle} />
            </div>
            <div className="titleContainer">
              <h2>{productTitle}</h2>
            </div>
          </div>
          <div className="bottomSubcontainer">
            <div className="priceContainer">
              <p>{currencyPrice} {salePrice}</p>
            </div>
            <div className="buttonContainer">
              <button>{buttonText}</button>
            </div>
          </div>
      </div>
    </a>
  )
}

export default ProductCard