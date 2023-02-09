import express from "express";
import * as productControler from "./products.controler.js";

const productRoute = express.Router();

productRoute.post("/addproduct", productControler.addproduct);
productRoute.put("/update", productControler.updateproduct);
productRoute.delete("/delete", productControler.deleteProduct);
productRoute.post("/search", productControler.search);
productRoute.get("/", productControler.getallProducts);

export default productRoute;
