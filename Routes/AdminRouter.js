const router = require("express").Router();
const Admin = require("../Models/AdminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode=require("jwt-decode")
const Project=require("../Models/Project")
const Property=require("../Models/Property")

// register
// router.route("/addproject").post((req, res) => {
router.post("/register", async (req, res) => {
  try {
    console.log(req.body);
    const { name,username,email,phone,password} = req.body;
    if( !username||!password){
          return res.status(400).json({ errorMessage: "Please enter all required fields." });
    }

    const existingUser = await Admin.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        errorMessage: "An account with this email already exists.",
      });

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save a new user account to the db

    const newAdmin = new Admin({
      name,
      username,
      email,
      phone,
      password:passwordHash,
      created_at:new Date(),
    });

    const savedAdmin = await newAdmin.save();

     // sign the token

    const token = jwt.sign(
      {
        admin: savedAdmin._id,
      },
      process.env.JWT_SECRET
    );

   // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send("Successfully Registered");

  } catch (err) {
    console.error(err);
    res.status(500).send("Registeration Unsuccessfully");
  }
});

// // log in

router.post("/login", async (req, res) => {
  try {
    // console.log(req.body);
    // console.log("api call ")
    const { username, password } = req.body;
    // validate
    if (!username || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });
        
    const existingUser = await Admin.findOne({ username });
  //  console.log(existingUser)
   
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token
    // console.log("api calll end")
    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie
    // console.log("api calll end");
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send("Succesfull");
  } catch (err) {
    console.error(err);
    res.status(500).send("Login Unsuccesfull");
  }
  
});

router.get("/logout", (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send("Logout Succesfully");
});


// router.get("/isauth", (req, res) => {
//   try {
//     res.send(true);
//   } catch (err) {
//     res.json(false);
//   }
// });




router.get("/isauth", (req, res) => {
  // console.log(" auth ",req.cookies)
  try {
    const token = req.cookies.token;
    // console.log(:+token)
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);
    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

router.get("/getusername", async(req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);
    jwt.verify(token, process.env.JWT_SECRET);
    var decoded = jwt_decode(token);
     const usname= await User.findById(decoded.user);
     res.send(usname);
  } catch (err) {
    res.json(false);
  }
});


module.exports = router;






// const router = require("express").Router();
// const Admin = require("../Models/AdminModel");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const jwt_decode=require("jwt-decode")
// const Project=require("../Models/Project")
// const Property=require("../Models/Property")

// // register
// router.post("/register", async (req, res) => {
//   try {
//     console.log(req.body);
//     const { name,username,email,phone,password} = req.body;
//     if( !username||!password){
//           return res.status(400).json({ errorMessage: "Please enter all required fields." });
//     }

//     const existingUser = await Admin.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({
//         errorMessage: "An account with this email already exists.",
//       });

//     // hash the password
//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);

//     // save a new user account to the db

//     const newAdmin = new Admin({
//       name,
//       username,
//       email,
//       phone,
//       password:passwordHash,
//       created_at:new Date(),
//     });

//     const savedAdmin = await newAdmin.save();

//      // sign the token

//     const token = jwt.sign(
//       {
//         admin: savedAdmin._id,
//       },
//       process.env.JWT_SECRET
//     );

//    // send the token in a HTTP-only cookie

//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "none",
//       })
//       .send("Successfully Registered");

//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Registeration Unsuccessfully");
//   }
// });




// // log in

// router.post("/login", async (req, res) => {
//   try {
//     console.log(req.body);
//     const { username, password } = req.body;
//     // validate
//     if (!username || !password)
//       return res
//         .status(400)
//         .json({ errorMessage: "Please enter all required fields." });

//     const existingUser = await Admin.findOne({username});
//     if (!existingUser)
//     // console.log("fill it")
//       return res.status(401).json({ errorMessage: "Wrong email or password." });
//       // console.log(passwordCorrect);
//     const passwordCorrect = await bcrypt.compare(
//       password,
//       existingUser.password );
//     if (!passwordCorrect)
//       return res.status(402).json({ errorMessage: "Wrong email or password." });

//     // sign the token
   
//     const token = jwt.sign(
//       {
//         user: existingUser._id,
//       },
//       process.env.JWT_SECRET
//     );

//     // send the token in a HTTP-only cookie

//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "none",
//       })
//       .send("Succesfull");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Login Unsuccesfull");
//   }
// });




// router.get("/logout", (req, res) => {
//   res
//     .cookie("token", "", {
//       httpOnly: true,
//       expires: new Date(0),
//       secure: true,
//       sameSite: "none",
//     })
//     .send("Logout Succesfully");
// });


// router.get("/isauthentic", (req, res) => {
//   try {
//     res.send(true);
//   } catch (err) {
//     res.json(false);
//   }
// });


// // router.get("/isauthentic", (req, res) => {
// //   // console.log(req.cookies)
// //   try {
// //     const token = req.cookies.token;
// //     // console.log(:+token)
// //     if (!token) return res.json(false);
// //     jwt.verify(token, process.env.JWT_SECRET);
// //     res.send(true);
// //   } catch (err) {
// //     res.json(false);
// //   }
// // });

// router.get("/getusername", async(req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.json(false);
//     jwt.verify(token, process.env.JWT_SECRET);
//     var decoded = jwt_decode(token);
//      const usname= await User.findById(decoded.user);
//      res.send(usname);
//   } catch (err) {
//     res.json(false);
//   }
// });


// module.exports = router;