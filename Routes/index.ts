import Express from "express";
import UsersRoute from "./UsersRoute";
import ProductsRoute from "./ProductsRoute";
import orderRoute from "./orderRoute";
import Auth from "./AuthRoute";


const router = Express.Router();
//Main

router.use("/api", UsersRoute);

router.use("/api", ProductsRoute);

router.use("/api", orderRoute);

router.use("/auth", Auth);

export default router;