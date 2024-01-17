export const fetchProducts = async (id?: string) => {
  try {
    let url = "https://fakestoreapi.com/products/";

    if (id) {
      url += id;
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Network trouble");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetch products:", error);
    throw error;
  }
};

export const createProduct = async (product: Product) => {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(product),
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error("Error creating product:", error);
  }
};
