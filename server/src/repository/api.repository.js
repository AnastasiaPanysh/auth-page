const { pool } = require('../DB')

async function foundUser(email) {
    const client = await pool.connect()
    const sql = `SELECT * FROM users WHERE email =$1`
    const data = (await client.query(sql, [email])).rows
    return data
}

async function createUserDB(email, pwd) {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = `INSERT INTO users(email,pwd) VALUES ($1,$2)`
        await client.query(sql, [email, pwd])

        await client.query('COMMIT')
    } catch (error) {
        await client.query('ROLLBACK');
        console.log(error.message);
        return [];
    }
}

async function checkUserByPwdDB(email) {
    const client = await pool.connect()
    const sql = `SELECT pwd FROM users WHERE email=$1`
    await client.query(sql, [email])
    const data = (await client.query(sql, [email])).rows[0];
    return data.pwd;
}

module.exports = { foundUser, createUserDB, checkUserByPwdDB }