import { useState } from "react";

import "./styles.css";

function ModernProductCard({
  productData,
  customContents,
  customStyles,
}: ModernProductCardProps) {
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
    <div style={customStyles.cardContainer} className="cardContainer">
      <a className="cardLink" href={slug}>
        <div style={customStyles.topSubcontainer} className="topSubcontainer">
          {brand?.image && (
            <img className="brandImageUrl" src={brand.image} alt={title} />
          )}
          <div className="imageContainer">
            <img src={currentSkuIndex[0].image} alt={title} />
          </div>
          <div className="titleContainer">
            <h2 style={customStyles.title} className="title">
              {title}
            </h2>
          </div>
        </div>
        <div
          style={customStyles.bottomSubcontainer}
          className="bottomSubcontainer"
        >
          <div className="colorPickerContainer">
            {sku.map((sku, index) => (
              <button
                style={{
                  backgroundColor: sku.hexadecimalColor,
                  ...customStyles.colorPicker,
                  ...customStyles.activePicker,
                }}
                className={`colorPicker ${
                  currentSkuIndex[0].hexadecimalColor ===
                    sku.hexadecimalColor && "activePicker"
                }`}
                key={index}
                onClick={handleSku}
                value={sku.hexadecimalColor}
              />
            ))}
          </div>
          <div style={customStyles.sizePicker} className="sizePickerContainer">
            {currentSkuIndex[0].sizes?.map((sizes, index) => (
              <button
                style={customStyles.activePicker}
                className={`sizePicker ${sizes === size && "activePicker"}`}
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
              <span
                style={customStyles.scratchedPrice}
                className="scratchedPrice"
              >
                {price.currencyPrice} {price.scratchedPrice}
              </span>
            )}
            <p style={customStyles.sellingPrice} className="sellingPrice">
              {price.currencyPrice} {price.sellingPrice}
            </p>
          </div>
        </div>
      </a>
      <div style={customStyles.buttonContainer} className="buttonContainer">
        <button
          style={customStyles.button}
          className={`button ${size === "0" && "disabledButton"}`}
          onClick={size !== "0" ? customContents.addToCartFunction : null}
        >
          {customContents.buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModernProductCard;
