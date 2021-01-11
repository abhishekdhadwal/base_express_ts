
import express from 'express';
import { admin_controller } from '../controller/index';

const router = express.Router();

router.get("/login", admin_controller.login)
router.post("/register", admin_controller.login)

export default router;