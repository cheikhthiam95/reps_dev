const {newHabitat} = require('../controllers/habitat');
const User = require('../models/habitat');
const crud = require('./utils/crud');
const router = crud(User);
const { authUser, authRole } = require('../middlewares/auth');
const { ROLES } = require('../config/roles')

router.post('/newHabitat', newHabitat);


// router.post('/newuser', authUser, authRole(ROLES.admin), newUser);
// // 

module.exports = router;