export type productDetails = {
  name: string;
  sportCategory: string;
  price: string;
  brand: string;
  rating: string;
  features: string;
  availabity: string;
  image: string;
};
export type Products = {
  id: string;

  sportroduct: productDetails;

  isDeleted: boolean;
};
