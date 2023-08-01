const router = require("express").Router();
const Apointment=require("../Models/ApointmentModel")



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