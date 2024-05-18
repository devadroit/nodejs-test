const { response, request } = require("express");

const getUser = async (req = request, res = response) => {
  const { id } = req.params;
  if (!id) return res.status(404).json({ msg: `Please give an ID.` });

  res.json({
    id: "123",
    name: "John Doe",
    email: "john.doe@example.com",
  });
};

const postUser = async (req, res = response) => {
  const { body } = req;

  const { name, email, password} = body;

  res.json({
    name,
    email,
    password
  });
};

module.exports = {
  getUser,
  postUser,
};
