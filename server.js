const express = require('express');
const mongoose = require('mongoose')
const locataireRoutes = require('./routes/locataires');
const reservationRoutes = require('./routes/reservations');
const app = express();

//charger les fichiers qui sont dans le répertoire public :
app.use(express.static('public'));

app.use(express.json());

// Routes  
app.use('/api/locataire/', locataireRoutes)

app.use('/api/reservation', reservationRoutes)

var port = process.env.PORT || 5001;
mongoose.connect(
    'mongodb+srv://cheikh:qFz3TdHmTGWC2V3u@cluster0.gucf5.mongodb.net/atypik_house?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}
).then(() => {
    // Commment démarrer l'écoute de notre server
    app.listen(5001, () => {
        console.log(' Le serveur écoute au port',port)
    });
}).catch((err) => {
    console.log(err)
})
