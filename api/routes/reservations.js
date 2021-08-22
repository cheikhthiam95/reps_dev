const {newReservation} = require('../controllers/reservation');
const User = require('../models/reservation');
const crud = require('./utils/crud');
const router = crud(User);
const { authUser, authRole } = require('../middlewares/auth');
const { ROLES } = require('../config/roles')

router.post('/newReservation', authUser ,newReservation);

// router.post('/newuser', authUser, authRole(ROLES.admin), newUser);
// // 

module.exports = router;