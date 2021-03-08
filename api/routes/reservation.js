// const {newHabitat} = require('../controllers/reservation');
const Reservation = require('../models/reservation');
const crud = require('./utils/crud');
const router = crud(Reservation);
// const { authUser, authRole } = require('../middlewares/auth');
// const { ROLES } = require('../config/roles')

// router.post('/newHabitat', newHabitat);
// router.post('/newuser', authUser, authRole(ROLES.admin), newUser);
// // 

module.exports = router;