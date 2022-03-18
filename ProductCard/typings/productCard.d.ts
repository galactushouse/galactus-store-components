interface ProductCardProps {
  customContents: {
    imageUrl: string;
    productTitle: string;
    productLogoImage?: string;
    sellingPrice: number;
    scratchedPrice?: number;
    currencyPrice: string;
    buttonText: string;
    productLink: string;
    addToCartFunction: () => void;
  };
}
