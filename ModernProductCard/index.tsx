import { useState } from "react";

import "./styles.css";

function ModernProductCard({ productData, customContents }: ModernProductCardProps) {
  const { title, brand, price, slug, sku } = productData;
  const [color, setColor] = useState(sku[0].hexadecimalColor);
  const [size, setSize] = useState("0");

  const handleSku = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setColor(event.currentTarget.value);
    setSize("0");
  };

  const handleSize = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSize(event.currentTarget.value);
  };

  const currentSkuIndex = sku.filter((sku) => sku.hexadecimalColor === color);

  return (
    <div className="cardContainer">
      <a className="cardLink" href={slug}>
        <div className="topSubcontainer">
          {brand?.image && (
            <img className="brandImageUrl" src={brand.image} alt={title} />
          )}
          <div className="imageContainer">
            <img src={currentSkuIndex[0].image} alt={title} />
          </div>
          <div className="titleContainer">
            <h2>{title}</h2>
          </div>
        </div>
        <div className="bottomSubcontainer">
          <div className="colorPickerContainer">
            {sku.map((sku, index) => (
              <button
                className={`${
                  currentSkuIndex[0].hexadecimalColor ===
                    sku.hexadecimalColor && "active"
                }`}
                key={index}
                style={{ backgroundColor: sku.hexadecimalColor }}
                onClick={handleSku}
                value={sku.hexadecimalColor}
              />
            ))}
          </div>
          <div className="sizePickerContainer">
            {currentSkuIndex[0].sizes?.map((sizes, index) => (
              <button
                className={`${sizes === size && "active"}`}
                key={index}
                onClick={handleSize}
                value={sizes}
              >
                {sizes}
              </button>
            ))}
          </div>
          <div className="priceContainer">
            {price.scratchedPrice && (
              <span>
                {price.currencyPrice} {price.scratchedPrice}
              </span>
            )}
            <p>
              {price.currencyPrice} {price.sellingPrice}
            </p>
          </div>
        </div>
      </a>
      <div className="buttonContainer">
        <button
          className={`${size === "0" && "disabledButton"}`}
          onClick={size !== "0" ? customContents.addToCartFunction : null}
        >
          {customContents.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModernProductCard;
