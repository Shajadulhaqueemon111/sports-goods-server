export type SingleProductsDetails = {
  name: string;
  description: string;
  category: string;
  brand: string;
  stock_quantity: string;
  rating: string;
  price: string;
  image: string;
};

export type SingleProduct = {
  id: string;

  single_product: SingleProductsDetails;
};
