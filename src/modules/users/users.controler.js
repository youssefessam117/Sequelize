import { Op } from "sequelize";
import userSchema from "./../../../dataBase/models/userTabls.model.js";
import productSchema from "./../../../dataBase/models/productTable.modle.js";

export const addUser = async (req, res) => {
  const { name, email, password, age } = req.body;
  const isExist = await userSchema.findAll({
    where: {
      email,
    },
  });
  if (isExist.length === 0) {
    const user = await userSchema.create({ name, email, password, age });
    res.json({ message: "sucsses", user });
  } else {
    res.json({ message: "email already exist" });
  }
};

export const updateUser = async (req, res) => {
  const { name, email, password, age, id } = req.body;
  const user = await userSchema.update({ email }, { where: { id } });

  if (user[0] === 0) {
    res.json({ message: "user doesn't exist " });
  } else {
    res.json({ message: "success", user });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.body;
  const user = await userSchema.destroy({
    where: {
      id,
    },
  });
  if (user === 0) {
    res.json({ message: "user doesn't exist " });
  } else {
    res.json({ message: "success" });
  }
};

export const search = async (req, res) => {
  const { search, age } = req.body;
  const user = await userSchema.findAll({
    where: {
      name: { [Op.startsWith]: `${search}` },
      age: { [Op.gt]: age },
    },
  });
  if (user.length === 0) {
    res.json({ message: "no user start with that letter " });
  } else {
    res.json({ message: "sucsses", user });
  }
};

export const searchById = async (req, res) => {
  const { search } = req.body;
  const user = await userSchema.findAll({
    where: {
      id: search,
    },
  });
  if (user.length === 0) {
    res.json({ message: "user doesn't exist " });
  } else {
    res.json({ message: "sucsses", user });
  }
};

export const getallUser = async (req, res) => {
  const user = await userSchema.findAll();
  res.json({ message: "sucsses", user });
};

export const getallUserProducts = async (req, res) => {
  const user = await userSchema.findAll({
    include: { model: productSchema, required: true },
  });
  res.json({ message: "sucsses", user });
};
