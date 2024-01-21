interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
}

interface CartProduct extends Product {
  quantity: number;
}

interface Delivery {
  product: Product[];
  price: number;
  adress: string;
  date: string | undefined;
}
