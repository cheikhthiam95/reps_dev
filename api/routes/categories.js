const {newCategorie} = require('../controllers/categorie');
const User = require('../models/categorie');
const crud = require('./utils/crud');
const router = crud(User);
const { authUser, authRole } = require('../middlewares/auth');
const { ROLES } = require('../config/roles')

router.post('/newCategorie', newCategorie);

// router.post('/newuser', authUser, authRole(ROLES.admin), newUser);
// // 

module.exports = router;