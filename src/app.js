import express from 'express';
import morgan from 'morgan';
import routes from "./routes/index.js";
import swaggerUI from "swagger-ui-express";
import swaggerDocument  from './docs/swaggerConfig.js'

const app = express();

app.use(morgan('dev'));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(routes.productRouter);
app.use(routes.historyRouter);

export default app;