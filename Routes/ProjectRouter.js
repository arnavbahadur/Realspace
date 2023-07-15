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

module.exports = router;