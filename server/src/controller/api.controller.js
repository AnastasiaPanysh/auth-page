const express = require('express');
const { createUser, doAuthorization} = require('../service/api.service')

const route = express.Router();

route.post('/reg', async (req, res) => {
    try {
        const { email, pwd } = req.body
        await createUser(email, pwd)
        res.status(200).send('success');
    } catch (error) {
        res.status(404).send(error.message)
    }
})

route.post('/auth', async (req, res) => {
    try {
        const { email, pwd } = req.body
        await doAuthorization(email, pwd)
        res.status(200).send('success');
    } catch (error) {
        res.status(404).send(error.message)
    }
})


module.exports = route;