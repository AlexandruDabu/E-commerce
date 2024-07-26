const { Router } = require('express');
const sequelize = require('../db/config')

const router = Router();

router.get('/', async (req,res) => {
    try {
        const {rows} = await query('SELECT * FROM reviews')
        res.status(200).send(rows);
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;