const router = require("express").Router();
const Property=require("../Models/Property")


router.get("/",(req, res) => {
    try {
        Property.find()
        .then((property) => res.json(property))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
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
    const { title,location, location_url, price, areaSqFt, hall, bedRoom, bathRoom,imageContainer,Photos,Description,Featured,addMoreDetails,Feature,Note,Rating,CurrentStatus} = req.body;
    //Create a new Post and save it to DB
    // console.log(req.body);
    const newProperty = new Property({
        title,location, location_url, created_at:new Date(), price, areaSqFt, hall, bedRoom, bathRoom,imageContainer,Photos,Description,Featured,addMoreDetails,Feature,Note,Rating,CurrentStatus
        });
    // Save the new post
    newProperty
        .save()
        .then(() => res.json("Property Added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/addproject").post((req, res) => {
    //Retrieve data for post
    const { title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,location,location_url, Note,CurrentStatus} = req.body;
    //Create a new Post and save it to DB
    // console.log(req.body);
    const newProject = new Project({title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,location,location_url, Note,CurrentStatus, created_at:new Date()});
    // Save the new post
    newProject
        .save()
        .then(() => res.json("Project Added!"))
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

  router.get("/deleteProject/:id", async (req, res) => {
    const ProjectId= req.params.id;
    try {
        let Projectsaved= await Project.findOneAndDelete({ _id:ProjectId});
        res.status(200).send(Projectsaved);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  router.post("/editproject/:id", async (req, res) => {
    const ProjectId= req.params.id;
    try {
        const { title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,location,location_url, Note,CurrentStatus} = req.body;
        let Projectsaved=await Project.findOneAndUpdate({_id:ProjectId},{title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,location,location_url, Note,CurrentStatus});
        res.status(200).send(Projectsaved);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  router.post("/editproperty/:id", async (req, res) => {
    const PropertywId= req.params.id;
    try {
        const { title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,location,location_url, Note,CurrentStatus} = req.body;
        let Propertywsaved=await Propertyw.findOneAndUpdate({_id:PropertywId},{title,description,imageContainer,Photos,addMoreDetails, Feature,Featured,location,location_url, Note,CurrentStatus});
        res.status(200).send(Propertywsaved);
    } catch (err) {
      res.status(200).send(err);
    }
  });

  module.exports = router;