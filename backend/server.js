

import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connect  from './config/db.js'

import path from 'path';
import { fileURLToPath } from 'url';

import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import itemRouter from './routes/itemRoute.js';
import orderRouter from './routes/orderRoute.js';
import { log } from 'console';

const app = express();
const port = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARE 
app.use(
    cors({
        origin: (origin, callback) => {
            const allowedOrigins = ['https://zwiggy-frontend-xmsy.onrender.com', 'https://zwiggy-admin-fvo9.onrender.com'];
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 

// DB CONNECT
connect();
app.get('/', (req, res) => {
    console.log("route is here");
    res.send('API WORKING');
})
// Routes
app.use('/api/user', userRouter)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/cart', cartRouter)
app.use('/api/items', itemRouter);
app.use('/api/orders', orderRouter);



app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
