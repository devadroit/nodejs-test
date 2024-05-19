const { response, request } = require("express");

const UserScheme = require("../models/users");
const { handleHttpError } = require("../utils/handleHttpError");

const getUser = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ msg: `Please give an ID.` });
    //66483167dd58a2f282335d02
    const user = await UserScheme.findOne({ _id: id });

    res.json(user);
  } catch (error) {
    handleHttpError(res, "User doesn't exists.");
  }
};

const postUser = async (req, res = response) => {
  try {
    const { body } = req;
    
    const { name, email, password } = body;

    const user = await UserScheme.create({ name, email, password });

    res.status(201).json(user);
  } catch (error) {
    console.log("error", error.message);
    handleHttpError(res, "Email alredy exists.");
  }
};

module.exports = {
  getUser,
  postUser,
};
