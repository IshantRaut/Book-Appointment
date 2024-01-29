const Users = require('../models/users');


exports.addData = async (req, res, next) => {

 await Users.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone})
    .then(result => res.json(result.dataValues.id))
    .catch(err => console.log(err));
}


exports.getAllUsers = (req, res, next) => {
    Users.findAll()
    .then(users => res.json(users))
}


exports.deleteData = (req, res, next) => {
    const id = req.params.id;
    Users.findByPk(id)
    .then(user => {
        user.destroy();
        res.send('deleted');
    })
}


exports.getUserById = async(req,res,next)=>{
    const id = req.params.id;
    Users.findByPk(id)
    .then(user=>res.send(user))
}