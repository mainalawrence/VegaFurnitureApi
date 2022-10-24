import Express from "express";
import verifyToken from "../Authentication/Auth";
import { getOrders, getOrdersDetails, getOrdersnOrdersDetails, setOrders, searchOrders, deleteOrders, filterOrders, UpdateOrders } from '../Controller/Orders/orderController'

const router = Express.Router();

router.get('/Orders', verifyToken(), getOrders);
router.get('/Orders/details', verifyToken(), getOrdersDetails);
router.get('/orders/Ordersnorderdetails', verifyToken(), getOrdersnOrdersDetails);

router.put('/Orders/:id', verifyToken(), UpdateOrders);

router.post('/Orders', verifyToken(), setOrders);

router.post('/Orders/:filter', verifyToken(), filterOrders);

router.post('/Orders/:search', verifyToken(), searchOrders);

router.delete('/Orders/:id', verifyToken(), deleteOrders);


export default router;