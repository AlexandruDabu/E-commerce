const { Router } = require('express');
const query = require('../db/config'); // Adjust path as needed

const router = Router();

router.get('/', async (req, res) => {
    try {
        const { rows } = await query('SELECT * FROM users');
        res.status(200).json(rows);
    } catch (err) {
        console.error('Database query error:', err);
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
});
router.get('/:id', async(req,res) => {
    try {
        const {rows} = await query(`SELECT * FROM users WHERE id = ${req.params.id}`);
        res.status(200).json(rows);
    } catch (error) {
        console.log(error)
    }
})
router.post('/register', async (req,res) => {
    try{
        console.log(await req.body);
        const { name, email, password, address, phonenumber} = await req.body;

    const existingUser = await query(`SELECT * FROM users WHERE email = $1`, [email])
    if(existingUser.rows.length !== 0){
        return res.status(400).json({message: 'Email already exists'});
    }
    const result = await query(
        'INSERT INTO users (name, email, password, address, phonenumber, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [name, email, password, address || '', phonenumber, 'Customer']
    );
    const newUser = result.rows[0]

    res.status(201).json({message : `User succesfully created`, user: newUser})}
    catch(err){
        console.log(err);
    }
})
module.exports = router;
