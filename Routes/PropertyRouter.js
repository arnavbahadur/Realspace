const router = require("express").Router();
const Property=require("../Models/Property")


router.get("/",(req, res) => {
    try {
      // console.log("dfjifgdf")
        Property.find()
        .then((property) => res.json(property))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.status(400).json("could not restrryt");
    }
});

router.route("/:id").get((req, res) => {
    Property.findById(req.params.id)
        .then((property) => res.json(property))
        .catch((err) => res.status(400).json("Error: " + err));
});

//Route to add a new post
router.route("/addproperty").post((req, res) => {
    //Retrieve data for post
    const { title,location,property_url, created_at, propertytype, Feature,Nearby, houseboximgUrl,Gallery,  Purpose,location_url, price, areaSqFt, hall, bedRoom, bathRoom,Description,addMoreDetails,Note,Rating,CurrentStatus} = req.body;
    //Create a new Post and save it to DB
    // console.log(req.body);
    const newProperty = new Property({
        title,location, location_url, created_at, price, areaSqFt, Purpose, hall, Feature,Nearby, houseboximgUrl,  propertytype,Gallery,property_url,bedRoom ,bathRoom,Description,addMoreDetails,Note,Rating,CurrentStatus
        });
    // Save the new post
    newProperty
        .save()
        .then(() => res.json("Property Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});


router.get("/deleteproperty/:id", async (req, res) => {
    const PropertyId= req.params.id;
    try {
        let Propertysaved= await Property.findOneAndDelete({ _id:PropertyId});
        res.status(200).send(Propertysaved);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  

  router.post("/editproperty/:id", async (req, res) => {
    const PropertywId= req.params.id;
    try {
        const { title,description, created_at , propertytype,  houseboximgUrl,Gallery,property_url,Nearby,addMoreDetails,  Purpose,Feature,location,location_url, Note,CurrentStatus} = req.body;
        let Propertywsaved=await Propertyw.findOneAndUpdate({_id:PropertywId},{title,description,property_url,Nearby, houseboximgUrl, Gallery, propertytype , created_at, Purpose,addMoreDetails, Feature,location,location_url, Note,CurrentStatus});
        res.status(200).send(Propertywsaved);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  module.exports = router;



  //  Gallery,imageContainer,Photos,