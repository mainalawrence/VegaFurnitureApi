import  Express from "express";
import verifyToken from "../Authentication/Auth";
import { getUsers ,setUser,updateUser,RemoveUser,softDeleteUser,getTrushedUsers} from "../Controller/Users/UsersController";

const router=Express.Router();

router.get('/users',verifyToken(),getUsers);
router.get('/trush/users/',verifyToken(),getTrushedUsers);

router.post('/users',setUser);

router.put('/users/:id',verifyToken(),updateUser);

router.delete('/users/soft/:id',verifyToken(),softDeleteUser);
router.delete('/users/:id',verifyToken(),RemoveUser);

export default router;
