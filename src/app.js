import express from 'express';
import usersRouter from './routes/users.router.js';
import productsRouter from './routes/products.router.js';

const app = express();
const server = app.listen(8080,()=>console.log("Servidor iniciado en el puerto 8080"));

app.use((req,res,next)=>{
    console.log(req.method)
})
app.use(express.json());
app.use('/users',usersRouter);
app.use('/products',productsRouter);
app.use(express.static('public'));

