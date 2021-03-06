const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userController");
const authController = require("../Controllers/auth");

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.getUser
);
router.get(
  "/users",
  userController.allowIfLoggedin,
  userController.grantAccess("readAny", "profile"),
  userController.getUsers
);
router.put(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("updateAny", "profile"),
  userController.updateUser
);
router.delete(
  "/user/:userId",
  userController.allowIfLoggedin,
  userController.grantAccess("deleteAny", "profile"),
  userController.deleteUser
);

module.exports = router;
