const { Router } = require("express");
const { check } = require("express-validator");

const { fieldsValidation } = require("../middlewares/");

const { getUser, postUser } = require("../controllers/users");

const router = Router();

router.get("/:id", getUser);
router.post(
  "/",
  [
    check("name", "Name is a required field.").not().isEmpty(),
    check("email", "Email is a required field.").not().isEmpty().isEmail(),
    check("password", "Password is a required field.").not().isEmpty(),
    fieldsValidation,
  ],
  postUser
);

module.exports = (app) => app.use("/api/users", router);
