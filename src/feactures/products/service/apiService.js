// La URL base para la API.
const API_BASE_URL = 'https://fakestoreapi.com';

// Función para obtener todos los productos.
export const getProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error('No se pudieron cargar los productos. Intenta nuevamente.');
  }
  const data = await response.json();
  return data;
};

// Puedes agregar otras funciones aquí en el futuro (ej. obtener un solo producto, etc.).