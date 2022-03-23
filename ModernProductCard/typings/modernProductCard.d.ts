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

interface CustomStylesProps {
  cardContainer?: {
    width?: string;
    height?: string;
    fontFamily?: string;
    fontWeight?: string;
    borderRadius?: string;
    backgroundColor?: string;
    boxShadow?: string;
  },
  topSubcontainer?: {
    width?: string;
    height?: string;
    borderRadius?: string;
    padding?: string;
    color?: string;
  },
  title?: {
    alignItems?: string;
    fontSize?: string;
    lineHeight?: string;
  },
  bottomSubcontainer?: {
    width?: string;
    height?: string;
    borderRadius?: string;
    padding?: string;
    backgroundColor?: string;
    color?: string;
  },
  colorPicker?: {
    width?: string;
    height?: string;
    border?: string;
    borderRadius?: string;
    cursor?: string;
  },
  sizePicker?: {
    width?: string;
    height?: string;
    fontSize?: string;
    border?: string;
    borderRadius?: string;
    backgroundColor?: string;
    color?: string;
    cursor?: string;
  },
  activePicker?: {
    border?: string;
  },
  scratchedPrice?: {
    fontSize?: string;
    color?: string;
  },
  sellingPrice?: {
    fontSize?: string;
    color?: string;
    fontWeight?: string;
  },
  buttonContainer?: {
    width?: string;
    height?: string;
  },
  button?: {
    width?: string;
    height?: string;
    borderRadius?: string;
    border?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    cursor?: string;
  }
}

interface ModernProductCardProps {
  productData: ProductDataProps;
  customContents: CustomContentsProps;
  customStyles: CustomStylesProps;
}
