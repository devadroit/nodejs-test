/**
 * @swagger
 * components:
 *   schemas:
 *     ExternalData:
 *       type: params
 *       required:
 *         - city
 *       properties:
 *         City:
 *           type: string
 *           description: City to search weather
 *       example:
 *         ?city=guasave
 */


const { Router } = require("express");
const { getExternalData } = require("../controllers/external-data");

const router = Router();

/**
 * @swagger
 * tags:
 *   name: ExternalData
 *   description: The ExternalData Document API
 * /api/external-data:
 *   get:
 *     summary: Get weather data.
 *     tags: [ExternalData] 
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: City to search weather
 *     responses:
 *       200:
 *         description: Weather response.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/ExternalData'
 *       403:
 *         description: City param is required.
 */


router.get("/", getExternalData);

module.exports = (app) => app.use('/api/external-data', router);
