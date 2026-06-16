exports.createUser = (req, res) => {
    res.json({message:"User created successfully"});
};

exports.readUser = (req, res) => {
    res.json({message:"User read successfully"});
};

exports.updateUser = (req, res) => {
    res.json({message:"User updated successfully"});
};

exports.deleteUser = (req, res) => {
    res.json({message:"User deleted successfully"});
};

exports.getAllUsers = (req, res) => {
    res.json({message:"All users fetched successfully"});
};

exports.getUserById = (req, res) => {
    res.json({message:"User fetched by ID"});
};

exports.loginUser = (req, res) => {
    res.json({message:"User login successful"});
};

exports.logoutUser = (req, res) => {
    res.json({message:"User logout successful"});
};

exports.changePassword = (req, res) => {
    res.json({message:"Password changed successfully"});
};

exports.updateProfile = (req, res) => {
    res.json({message:"User profile updated successfully"});
};

exports.makeAdmin = (req, res) => {
    res.json({message:"User made admin successfully"});
};

exports.removeAdmin = (req, res) => {
    res.json({message:"Admin role removed successfully"});
};

exports.searchUsers = (req, res) => {
    res.json({message:"User search completed successfully"});
};

exports.filterUsers = (req, res) => {
    res.json({message:"User filter completed successfully"});
};

exports.blockUser = (req, res) => {
    res.json({message:"User blocked successfully"});
};

exports.unblockUser = (req, res) => {
    res.json({message:"User unblocked successfully"});
};

exports.verifyEmail = (req, res) => {
    res.json({message:"Email verified successfully"});
};

exports.resendVerification = (req, res) => {
    res.json({message:"Verification email resent"});
};

exports.uploadProfilePicture = (req, res) => {
    res.json({message:"Profile picture uploaded successfully"});
};

exports.deleteAccount = (req, res) => {
    res.json({message:"Account deleted successfully"});
};
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user", userController.updateUser);
router.delete("/delete-user", userController.deleteUser);

router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);

router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);

router.put("/change-password", userController.changePassword);
router.put("/update-profile", userController.updateProfile);

router.put("/make-admin/:id", userController.makeAdmin);
router.put("/remove-admin/:id", userController.removeAdmin);

router.get("/search", userController.searchUsers);
router.get("/filter", userController.filterUsers);

router.patch("/block-user/:id", userController.blockUser);
router.patch("/unblock-user/:id", userController.unblockUser);

router.post("/verify-email", userController.verifyEmail);
router.post("/resend-verification", userController.resendVerification);

router.post(
  "/upload-profile-picture",
  userController.uploadProfilePicture
);

router.delete("/delete-account", userController.deleteAccount);

module.exports = router;
const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/api/v1/users", userRoutes);

module.exports = app;
const app = require("./src/app");

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

