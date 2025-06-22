import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

//Funcion para sacar los datos necesarios a mostrar de cada productos
const newProductsList = (productsList) => {
    return productsList.map(product => (
        {  
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            category: product.category,
            thumbnailImage: product.thumbnail
        }
    ));
}

export const getAllProductsApi = async () => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    //devuelve los primeros 30 productos de los 194, es la cantidad por defecto de la api de Dummyjson sin especificar el limit
    const { products, total, skip, limit } = response.data;
    
    const myProducts = newProductsList(products);

    return {
        products: myProducts,
        total,
        skip,
        limit
    }
};

export const searchProductsApi = async (term) => {
    const response = await axios.get(`${API_BASE_URL}/products/search?q=${term}`);
    const { products, total, skip, limit } = response.data;

    const myProducts = newProductsList(products);

    return {
        products: myProducts,
        total,
        skip,
        limit
    }
}

export const getProductApi = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return newProductsList([response.data]);
}