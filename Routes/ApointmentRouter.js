const router = require("express").Router();
const Apointment=require("../Models/ApointmentModel")

router.get("/allapointment", (req, res) => {
    try {
      Apointment.find()
        .then((blg) => res.json(blg))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(200).send(err);
    }
  });






router.route("/apointment").post((req, res) => {
  const { f_name,l_name,date,phone,message} = req.body;
  const newapointment = new Apointment({
      f_name,
      l_name,
      phone,
      date,
      message
  });
 
  newapointment.save()
      .then(() => res.json("New apointment Added Succesfully"))
      .catch((err) => res.status(400).json("Error: " + err));
})



module.exports=router