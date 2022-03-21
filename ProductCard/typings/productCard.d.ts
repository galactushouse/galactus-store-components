interface ProductDataProps {
  title: string;
  brand?: {
    name: string;
    image: string;
  };
  price: {
    currencyPrice: string;
    sellingPrice: number;
    scratchedPrice?: number;
  };
  slug: string;
  sku: Array<{
    image: string;
    hexadecimalColor?: string;
    sizes?: Array<string>;
  }>;
}

interface CustomContentsProps {
  buttonText: string;
  addToCartFunction: () => void;
}

interface ProductCardProps {
  productData: ProductDataProps;
  customContents: customContentsProps;
}
