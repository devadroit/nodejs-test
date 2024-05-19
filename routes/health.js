
/**
 * @swagger
 * components:
 *   schemas:
 *     Health:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           description: Health status code 
 *         timestamp:
 *           type: string
 *           description: Health timestamp
 */

const express = require("express");
const { getHealth } = require("../controllers/health");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Health
 *   description: The Users Document API
 * /api/health:
 *   get:
 *     summary: Get Server Health
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: Server health response
 *         contens:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Health'
 *       404:
 *         description: Some error appears.
 */



router.get("/", getHealth);

module.exports = (app) => app.use('/api/health', router);
