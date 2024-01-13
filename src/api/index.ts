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
