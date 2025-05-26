interface Env {
  VITE_BACKEND_URL?: string;
}

declare global {
  interface Window {
    env?: Env;
  }
}

// let backendUrl = import.meta.env.VITE_BACKEND_URL ?? window.env?.VITE_BACKEND_URL ?? "http://localhost:3000";
let backendUrl = import.meta.env.VITE_BACKEND_URL ?? window.env?.VITE_BACKEND_URL;
// let backendUrl = '/api'

// if (window.__ENV__ && window.__ENV__.BACKEND_URL) {
//   backendUrl = window.__ENV__.BACKEND_URL;
// }

if (!backendUrl) {
  throw new Error("VITE_BACKEND_URL is not defined");
}

const API_URL = `${backendUrl}/productos`;

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
