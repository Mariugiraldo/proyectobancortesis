
const API_URL = 'http://localhost:8080/api/v1/products';

export const getArticleDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) {
      const data = await response.json(); // Agrega await aquí
      return data;
    } else { response.status === '404' } {
      throw new Error('No se encontro el producto deseado');
    }
  } catch (error) {
    console.error('Ocurrió un error al obtener el producto indicado', error);
    throw new Error('Ocurrió un error al obtener el producto indicado');
  }
};

export const getAllArticles = async () => {
  try {
    const response = await fetch(`${API_URL}/get`);
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

export const createArticle = async(article) => {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article)
    });

    if (response) {
      const data = await response.json();
      console.log('Exito al subir');
      return data;
    }
  } catch (error) {
    console.error('Ocurrio un errror al registrar el producto', error);
    throw error;
  }
};

export const updateArticle = async(id, updatedArticle) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedArticle)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Modificado con exito!');
      return data;
    }
  } catch (error) {
    console.error('Ocurrio un error al actualizar el producto', error);
    throw error;
  }
};

export const deleteArticle = async(id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`,{
      method: 'DELETE'
    })
    // if(response.ok){
    //   const data = await response.json();
    //   console.log('Producto borrado correctamente');
    //   return data;
    // }
  } catch (error) {
    console.error('Ocurrio un errror al borrar el producto', error);
    throw error;
  }
};
