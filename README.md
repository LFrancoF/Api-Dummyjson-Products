# API de Productos con Historial – Node.js + Express + Swagger UI + sqlite

Este proyecto es una API desarrollada con **Node.js v20**, que consume los productos de [`dummyjson.com/products`](https://dummyjson.com/products) y almacena el historial de productos visitados utilizando **SQLite**. También cuenta con una documentación interactiva gracias a **Swagger UI**.

---

## Para correr el proyecto:

**1. Clona este repositorio**

```bash
git clone https://github.com/LFrancoF/Api-Dummyjson-Products.git
cd Api-Dummyjson-Products
```

**2. Una vez dentro del proyecto, instala las dependencias**

```bash
npm install
```

**3. Inicia el servidor en modo desarrollo en localhost:3000**

```bash
npm run dev
```

## Rutas disponibles:

| Método | Ruta                     | Descripción                                                                 |
|--------|--------------------------|-----------------------------------------------------------------------------|
| GET    | `/products`              | Lista los primeros 30 productos desde la API externa                        |
| GET    | `/search?q=phone`        | Busca productos segun el termino `q` (por ejemplo: `phone`, `laptop`)       |
| GET    | `/products/:id`          | Devuelve un producto por su `id` y lo guarda en el historial local          |
| GET    | `/history`               | Devuelve los últimos 5 productos visitados y almacenados localmente         |
| GET    | `/api-docs`              | Muestra la documentación con Swagger UI                                     |

## Tecnologías utilizadas:

- **Express.js** – Framework para crear APIs en Node.js
- **SQLite3** – Base de datos liviana para guardar el historial localmente
- **Swagger UI** – Paquete para documentar nuestro codigo con Swagger y asi usar con archivos yaml
- **yaml** – Paquete para parsear y cargar archivos `.yaml` en Node.js, usado para la documentacion en Swagger
- **Nodemon** – Recarga automática del servidor durante el desarrollo
- **Dummy JSON API** – API externa usada como fuente de datos: [https://dummyjson.com/products](https://dummyjson.com/docs/products)
