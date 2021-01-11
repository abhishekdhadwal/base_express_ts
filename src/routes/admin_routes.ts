
import express from 'express';
import { admin_controller } from '../controller/index';

const router = express.Router();

router.post("/login", admin_controller.login)

export default router;