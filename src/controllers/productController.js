import { getAllProductsApi, searchProductsApi, getProductApi } from '../services/productService.js';
import { saveHistory } from '../services/historyService.js';

export const showProducts = async (req, res) => {
    try {
        const products = await getAllProductsApi();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
}

export const searchProducts = async (req, res) => {
    try {
        const term = req.query.q;
        const products = await searchProductsApi(term);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el producto' });
    }
}

export const getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await getProductApi(id);

        //guardamos este producto en el historial en sqlite3
        saveHistory(product);

        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el producto' });
    }
}