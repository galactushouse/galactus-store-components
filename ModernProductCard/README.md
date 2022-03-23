# ModernProductCard

ModernProductCard is a ready-to-use product card component for your e-commerce. The component accepts to receive several SKU's of a product, as it has selectors so that the customer can choose and add the same to the cart without having to go to the product page.

## Preview

<div>
  <img alt="Component" height="600" src=".github/component.png" />
</div>

## Usage

#### Install

Install the `galactus-store-components` library:

```sh
npm install galactus-store-components
```

#### Import

Import the component on your page or inside another component:

```javascript
import { ModernProductCard } from 'galactus-store-components'
```

#### Props

Add the component wherever you need it and pass the required props and customize it with the non-mandatory props:

```javascript
<ModernProductCard
  productData={products}
  customContents={contents}
  customStyles={styles}
/>
```

Examples of used variables:

```javascript
const products = {
  title: "Nike Air Max SC",
  brand: {
    name: "Nike",
    image:
      "https://nike-logo.png"
  },
  price: {
    currencyPrice: "$",
    sellingPrice: 250.99,
    scratchedPrice: 299.99
  },
  slug: "nike-epic-flash",
  sku: [
    {
      image:
        "https://nike-black.jpg",
      hexadecimalColor: "#000000",
      sizes: ["36", "37", "38", "39", "40"]
    },
    {
      image:
        "https://nike-purple.jpg",
      hexadecimalColor: "#76799F",
      sizes: ["36", "38", "39"]
    },
    {
      image:
        "https://nike-pink.jpg",
      hexadecimalColor: "#FFE4E1",
      sizes: ["36", "37", "39", "40"]
    }
  ]
}

const contents = {
  buttonText: 'Add To Cart',
  addToCartFunction: addToCartFunction
}

const styles = {
  cardContainer: {
    width: '250px',
    height: '450px',
    fontFamily: 'Tahoma',
    backgroundColor?: '#FFFFFF'
  },
  title: {
    fontSize: '20px'
  },
  colorPicker: {
    width: '20px',
    height: '20px',
    border: '2px solid #FFFFFF',
    borderRadius: '50%',
    cursor: 'pointer'
  },
  sellingPrice: {
    fontSize: '20px',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  button: {
    width: '100%',
    height: '40px',
    borderRadius: '10px',
    backgroundColor: '#666666',
    color: '#FFFFFF',
    fontSize: '15px',
    fontWeight: '700',
    cursor: 'pointer'
  }
}
```
