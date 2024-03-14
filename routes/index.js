const express = require('express')
const router  = express.Router()
const {verifyToken} = require('../middleware')
let controller = require('../controllers')
const AUTH = controller.AuthController;
const USER = controller.userController;



router.get("/", function(req, res){
    res.json({
        status: "200",
        message: "Selamat Datang"
    });
})

router.route("/login").post(AUTH.login)
// router.use(verifyToken);
router.route("/user").get(USER.getAllUsers)
router.route("/user").post(USER.createNewUser);




module.exports = router;