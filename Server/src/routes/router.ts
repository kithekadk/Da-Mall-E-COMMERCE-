import { Router } from "express";
import { createProduct, deleteProduct, getProducts } from "../controller/productController";

const router = Router()

router.post('/create',createProduct)
router.get('/all',getProducts)
router.post('/delete',deleteProduct)

export default router;