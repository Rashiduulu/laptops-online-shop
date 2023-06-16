interface Image {
  _key: string;
  _type: "image";
  asset: {
    url: string;
    _ref: string;
  };
}
interface Catalog {
  title: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _type: "catalog";
  _rev: string;
  image: Image[];
  slug: {
    _type: "slug";
    current: string;
  };
}
interface Category {
  title: string;
  _id: string;
  _updatedAt: string;
  _createdAt: string;
  _type: "category";
  _rev: string;
  slug: {
    _type: "slug";
    current: string;
  };
}
interface Product {
  title: string;
  _id: string;
  price: number;
  oldPrice: number;
  discount: number,
  quantity: number;
  _updatedAt: string;
  _createdAt: string;
  _type: "product";
  _rev: string;
  description: string;
  slug: {
    current: string;
  };
  category: {
    _type: "reference";
    _ref: string;
  };
  catalog: {
    _type: "reference";
    _ref: string;
  };
  slug: {
    _type: "slug";
    current: string;
  };
  image: Image[];
}
interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}