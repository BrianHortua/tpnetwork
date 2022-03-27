import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import networkRoutes from './routes';

const app = express()

app.use(cors())
app.use(morgan("dev"));
app.use(express.json())

app.use('/api', networkRoutes);

export default app;