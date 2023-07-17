const router = require("express").Router();
const Project=require("../Models/Project")


router.get("/",(req, res) => {
    try {
        Project.find()
        .then((project) => res.json(project))
        .catch((err) => res.status(400).json("Error: " + err));
    } catch (err) {
      res.json(false);
    }
});

router.route("/:id").get((req, res) => {
    Project.findById(req.params.id)
        .then((project) => res.json(project))
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
  
  


  
module.exports = router;