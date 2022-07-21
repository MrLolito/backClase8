import {Router} from 'express';

const router = Router();
const products = [];

router.get('/',(req,res)=>{

})
router.post('/',(req,res)=>{
    let products = req.body
    if(!products.name) res.status(400).send('El nombre es obligatorio');
    products.push(products)
    res.send({status:"success", message:"Producto agregado correctamente"})
})
router.put('/',(req,res)=>{

})
router.delete('/',(req,res)=>{
})


export default router;