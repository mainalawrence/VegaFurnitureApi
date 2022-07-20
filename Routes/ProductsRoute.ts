import  Express from "express";
import verifyToken from "../Authentication/Auth";
import {getProducts,setProducts,searchProducts,deleteProducts,filterProducts,UpdateProducts,softDeleteProducts} from '../Controller/Products/ProductsControllers'
import { upload } from "../Utility/ProductImageUpload";
const router=Express.Router();

router.get('/products',getProducts);

router.put('/products/:id',verifyToken(),upload.array('Product',4),UpdateProducts);

router.post('/products',verifyToken(),upload.array('Product',4),setProducts);

router.post('/products',filterProducts);

router.post('/products/:name',searchProducts);

router.delete('/products/soft/:id',verifyToken(),softDeleteProducts);

router.delete('/products/:id',verifyToken(),deleteProducts);



export default router;
