const router = require("express").Router();
const Popup=require("../Models/PopupModel")



router.get("/mypopup", (req, res) => {
   try {
    Popup.find().then((Popup)=> res.json(Popup))
    .catch((err)=> res.status(400).json(err));
    
   } catch (error) {
    res.json(err);
   }
  });

  router.route("/addpopup").post((req, res) => {
    //Retrieve data for post
    const { imgUrl} = req.body;
    //Create a new Post and save it to DB
    // console.log(req.body);
    const newPopup = new Popup({ imgUrl});
    // Save the new post
    newPopup
        .save()
        .then(() => res.json("popup Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

module.exports=router