const express = require('express');
const router = express.Router();
const controllers = require('../controllers/users');


router.post('/addData',controllers.addData);
router.get('/getusers',controllers.getAllUsers);
router.post('/delete/:id',controllers.deleteData);
router.post('/getUserById/:id',controllers.getUserById);

module.exports = router