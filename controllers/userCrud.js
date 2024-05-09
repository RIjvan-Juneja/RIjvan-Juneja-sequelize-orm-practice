const { where } = require("sequelize");
const db = require("../database/models/index");
const Users = db.users;

const addNewUser = async (req,res) =>{
  try {
    console.log(req.body);
    await Users.create(req.body);
    res.status(200).send({status : "ok", msg : "User created Successfully"});
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const fetchUsers = async (req,res) =>{
  try {
    const users = await Users.findAll({});
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const fetchUser = async (req,res) =>{
  try {
    const users = await Users.findOne({
      where:{
        id:req.params.id
      }
    });
    res.status(200).send(users);
  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

const update = async (req,res) =>{
  try {
    // Change everyone without a last name to "Doe"
    await Users.update(req.body,
      {
        where: {
          id:req.params.id
        },
      },
    );
    res.status(200).send({status : "ok", msg : "User updated Successfully"});

  } catch (err) {
    console.log(err);
    res.status(500).send({status : "Internal Server Error", msg : "An unexpected error occurred while processing your request"});
  }
}

module.exports = { addNewUser , fetchUsers, fetchUser,update };