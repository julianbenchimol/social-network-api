const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createNewUser);
router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

module.exports = router;