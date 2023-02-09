import { Op } from "sequelize";
import productSchema from "../../../dataBase/models/productTable.modle.js";
import userSchema from "./../../../dataBase/models/userTabls.model.js";

export const addproduct = async (req, res) => {
  const { productname, description, price, userId } = req.body;
  const product = await productSchema
    .create({
      productname,
      description,
      price,
      userId,
    })
    .catch((err) => {
      res.json({ message: "error user id is not exist ", err });
    });
  res.json({ message: "sucsses", product });
};

export const updateproduct = async (req, res) => {
  const { id, userId, description } = req.body;
  const productExist = await productSchema.findAll({
    where: {
      id,
    },
  });
  if (productExist.length === 0) {
    res.json({ message: "wrong product id ", productExist });
  } else {
    if (productExist[0].userId === userId) {
      const product = await productSchema.update(
        { description },
        { where: { id } }
      );
      res.json({ message: "success" });
    } else {
      res.json({ message: "you dont have the premision to update " });
    }
  }
};
export const deleteProduct = async (req, res) => {
  const { id, userId } = req.body;
  const productExist = await productSchema.findAll({
    where: {
      id,
    },
  });
  if (productExist.length === 0) {
    res.json({ message: "wrong product id ", productExist });
  } else {
    if (productExist[0].userId === userId) {
      const product = await productSchema.destroy({
        where: {
          id,
        },
      });
      res.json({ message: "success" });
    } else {
      res.json({ message: "you dont have the premision to delete " });
    }
  }
};

export const search = async (req, res) => {
  const { price } = req.body;
  const product = await productSchema.findAll({
    where: {
      price: {
        [Op.gt]: price,
      },
    },
  });
  if (product.length === 0) {
    res.json({ message: `no product greater than ${price} ` });
  } else {
    res.json({ message: "sucsses", product });
  }
};

export const getallProducts = async (req, res) => {
  const products = await productSchema.findAll();
  res.json({ message: "sucsses", products });
};
