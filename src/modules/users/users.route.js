import express from "express";
import * as userControler from "./users.controler.js";

const userRoute = express.Router();

userRoute.post("/adduser", userControler.addUser);
userRoute.put("/update", userControler.updateUser);
userRoute.delete("/delete", userControler.deleteUser);
userRoute.post("/search", userControler.search);
userRoute.post("/searchbyid", userControler.searchById);
userRoute.get("/", userControler.getallUser);
userRoute.get("/userproducts", userControler.getallUserProducts);

export default userRoute;
