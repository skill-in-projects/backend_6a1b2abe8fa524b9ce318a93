const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false
});

/**
 * @swagger
 * /api/testcoder:
 *   get:
 *     summary: Get all coders
 *     tags: [TestCoder]
 *     responses:
 *       200:
 *         description: List of all coders
 */
const getAll = async (req, res, next) => {
    await pool.query('SET search_path = public, "$user"');
    const result = await pool.query('SELECT * FROM public."TestCoder" ORDER BY Id');
    res.json(result.rows);
};

module.exports = { getAll };
