const router = require('express').Router();
const {
    getUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createNewUser);
router.route('/:userId').get(getOneUser);
router.route('/:userId').put(updateUser);
router.route('/:userId').delete(deleteUser);

module.exports = router;