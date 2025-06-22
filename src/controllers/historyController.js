import { getLast5Products } from '../services/historyService.js';

export const getLastProducts = async (req, res) => {
    try {
        const lastProducts = await getLast5Products();
        res.json(lastProducts);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener productos' });
    }
}