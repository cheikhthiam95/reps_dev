const Hotes = require("../models/hotes");
// const validation = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var username = req.body.username;
  var password = req.body.password;

  await Hotes.findOne({
    $or: [{ email: username }, { phone: username }],
  }).then((hote) => {
    if (hote) {
      bcrypt.compare(password, hote.password, (err, result) => {
        if (err) {
          res.status(500).json({
            message: err,
          });
        }
        if (result) {
          let token = jwt.sign(
            { first_name: hote.first_name },
            "VerySecretValue",
            { expiresIn: "1h" }
          );
          res.status(400).json({
            message: "Loging sucessfuly",
            token,
          });
        } else {
          res.status(500).json({
            message: "The password is not correcte",
          });
        }
      });
    } else {
      
      res.status(500).json("The uer is not found");
    }
  });
};

const register = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
    if (err) {
      res.status(500).json({
        error: err,
      });
    } else {
      ///
    }
    var hote = new Hotes({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPass,
      phone: req.body.phone,
      city: req.body.city,
      postal_code: req.body.postal_code,
      country: req.body.country,
    });
    if(req.file){
      hote.avatar = req.file.path
    }

    hote
      .save()
      .then(() => {
        console.log("hote creatred");
        res.status(200).json({ message: "hote created" });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: err });
      });
  });
};
const createHote = (req, res) => {
  const { error } = validation.addHoteValidation(req.body);
  if (error) {
    res.status(500).send(error);
  } else {
    let hote = new Hotes({
      nom: req.body.nom,
      prenom: req.body.prenom,
      pays: req.body.pays,
    });
   
    hote
      .save()
      .then(() => {
        console.log("Hote créatred");
        res.status(200).json({ message: "Hote created" });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ message: "Error on  creatting hote" });
      });
  }
};
const getAllHote = (req, res) => {
  Hotes.find((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error on  Getting hote" });
    } else {
      res.status(200).json({ result: result, session: req.session });
    }
  });
};

const getHote = (req, res) => {
  Locataires.find({ _id: req.params.id }, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Error on  Getting hote" });
    } else {
      res.status(200).json({ result });
    }
  });
};
const updateHote = async (req, res) => {
  const hoteUpdate = await Hotes.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        nom: req.body.nom,
        prenom: req.body.prenom,
        pays: req.body.pays,
      },
    },
    { new: true }
  );
  if (hoteUpdate) {
    console.log(hoteUpdate);
    res.status(200).json({ message: "Update successfully" });
  } else {
    res.status(500).json({ message: "Error while updating" });
  }
};
const deleteHote = async (req, res) => {
  const hoteUpdate = await Hotes.findOneAndDelete({
    _id: req.params.id,
  });
  if (hoteUpdate) {
    console.log(hoteUpdate);
    res.status(200).json({ message: "Delete successfully" });
  } else {
    res.status(500).json({ message: "Error while delettting" });
  }
};

module.exports = {
  createHote,
  getHote,
  updateHote,
  deleteHote,
  getAllHote,
  register,
  login,
};
