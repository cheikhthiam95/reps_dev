 
const app = require("./app") 
// const habitationsRoutes = require('./routes/habitations');
const session = require("express-session");
const parseurl = require("parseurl");  
var port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(' Le serveur écoute au port',port)
});


// app.use('/api/habitation/', habitationsRoutes)
//app.use('api/habitation')
