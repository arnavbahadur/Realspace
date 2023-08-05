const router = require("express").Router();
const Contact=require("../Models/ContactModel")



router.get("/allmsg", (req, res) => {
    try {
        Contact.find()
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
  });


router.route("/addmsg").post((req, res) => {
    const { f_name,l_name,phone,email,requirement,budget,message} = req.body;
    const newmsg = new Contact({
        f_name,
        l_name,
        phone,
        email,
        requirement,
        budget,
        message
    });
   
    newmsg.save()
        .then(() => res.json("New Query Added Succesfully"))
        .catch((err) => res.status(400).json("Error: " + err));
  })





module.exports=router

























//   router.get("/allquery",adminauth, (req, res) => {
//     try {
//         Contact.find()
//         .then((blg) => res.json(blg))
//         .catch((err) => res.status(400).json("Error: " + err));
//     } catch (err) {
//       res.status(200).send(err);
//     }
//   });