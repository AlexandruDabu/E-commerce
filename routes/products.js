const { Router } = require('express');
const query = require('../db/config');

const router = Router();

router.get('/', async(req,res) => {
    try {
        const {rows} = await query('SELECT * FROM products');
        res.status(200).send(rows);
    } catch (err) {
        console.log(err);
    }
})

module.exports = router;