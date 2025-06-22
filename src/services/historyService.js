import db from '../config/configDB.js';

export const saveHistory = (product) => {
    
    const { id: productId, title, description, price, thumbnailImage: image } = product;

    const query = `
        INSERT INTO products (productId, title, description, price, image)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.run(query, [productId, title, description, price, image], function (err) {
        if (err) return console.error('Error al guardar historial:', err.message);
        console.log(`Producto con ID ${productId} guardado en historial`);
    });
}

export const getLast5Products = () => {
    const query = `SELECT productId, title, description, price, image, datetime(visitedAt,'localtime') as visitedAt FROM products ORDER BY id DESC LIMIT 5`;

    return new Promise((resolve, reject) => {
        db.all(query, [], (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
        });
    });
}