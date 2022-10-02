const router = require("express").Router();

const {
  getUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// http://localhost:3001/api/users
router.route("/").get(getUser).post(createUser);

// http://localhost:3001/api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

// http://localhost:3001/api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
