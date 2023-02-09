import express from "express";
import productRoute from "./src/modules/products/products.route.js";
import userRoute from "./src/modules/users/users.route.js";

const app = express();

app.use(express.json());

app.use("/user", userRoute);
app.use("/products", productRoute);

app.listen("3000", () => {
  console.log("server is running");
});
