const { Router } = require('express')
const express = require('express')
const { loginController, registerController } = require('../Controllers/userController')

// Router Object
const router = express.Router()

// routes
// POST // LOGIN
router.post('/login',loginController)

//POST//REGISTER
router.post("/register",registerController)

module.exports = router
