const API_URL = `${import.meta.env.VITE_API_URL}/productos`;
// process.env.REACT_APP_API_URL

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  return await response.json();
};

export const fetchProductById = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return await response.json();
};

export const createProduct = async (product: any) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

export const updateProduct = async (id: string, product: any) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return await response.json();
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
