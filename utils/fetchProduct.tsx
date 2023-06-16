export const fetchProduct = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProduct`
  );

  const data = await response.json();
  const products: Product[] = data.products;

  return products;
};

