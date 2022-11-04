import Express from "express";
import verifyToken from "../Authentication/Auth";
import { getProducts, setProducts, searchProducts, getProduct, deleteProducts, filterProducts, UpdateProducts, softDeleteProducts } from '../Controller/Products/ProductsControllers'
import { upload } from "../Utility/ProductImageUpload";
const router = Express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProduct);

router.put('/products/:id', verifyToken(), upload.array('Product', 3), UpdateProducts);

router.post('/products', verifyToken(), upload.array('Product', 3), setProducts);

router.post('/products/filter/:filter', filterProducts);

router.post('/products/search/:search', searchProducts);

router.delete('/products/soft/:id', verifyToken(), softDeleteProducts);

router.delete('/products/:id', verifyToken(), deleteProducts);


export default router;
