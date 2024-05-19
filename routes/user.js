
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         _id:
 *           type: string
 *           description: Users UUID
 *         name:
 *           type: string
 *           description: Users name 
 *         email:
 *           type: string
 *           description: Users email
 *         password:
 *           type: string
 *           description: Users password
 *         createdAt:
 *           type: string
 *           description: Date when was created.
 *         updatedAt:
 *           type: string
 *           description: Last date where was updated.
 *       example:
 *         name: Tony
 *         email: tony@dev.xyz
 *         password: my_secret_password 
 */

const { Router } = require("express");
const { check } = require("express-validator");

const { fieldsValidation } = require("../middlewares/");

const { getUser, postUser } = require("../controllers/users");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The Users Document API
 * /api/users:
 *   post:
 *     summary: Create new user.
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *                $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User was created.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       403:
 *         description: Some server error
 * /api/users/{id}:
 *   get:
 *     summary: Get User by ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User ID
 *     responses:
 *       200:
 *         description: The user response by id
 *         contens:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       404:
 *         description: User doesn't exists.
 */



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
