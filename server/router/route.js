import express from 'express';
import { addUser, deleteUser, getUser, getUserById, updateUser } from '../controller/userController.js';

const router = express.Router();

router.post("/adduser",addUser)
router.get("/alluser",getUser)
router.get("/alluser/:id",getUserById)
router.put("/updateuser/:id",updateUser)
router.delete("/:id",deleteUser)



export default router;