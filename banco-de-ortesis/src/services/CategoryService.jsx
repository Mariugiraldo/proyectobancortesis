const API_URL = 'http://localhost:8080/api/v1/categories';

export const getCategories = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      if (response.ok) {
        const data = await response.json(); // Agrega await aquí
        return data;
      }
      throw new Error('No se pudo obtener la lista de productos');
    } catch (error) {
      console.error('Ocurrió un error al obtener la lista de productos', error);
      throw new Error('Ocurrió un error al obtener la lista de productos');
    }
  };