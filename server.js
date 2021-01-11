const express = require('express');
const mongoose = require('mongoose')
const locataireRoutes = require('./routes/locataires');
const reservationRoutes = require('./routes/reservations');
const app = express();

app.use(express.json());

// Routes  
app.use('/api/locataire', locataireRoutes)
app.use('/api/reservation', reservationRoutes)


mongoose.connect(
    'mongodb+srv://cheikh:qFz3TdHmTGWC2V3u@cluster0.gucf5.mongodb.net/atypik_house?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}
).then(() => {
    // Commment démarrer l'écoute de notre server
    app.listen(3000, () => {
        console.log(' Le serveur écoute au port 3000')
    });
}).catch((err) => {
    console.log(err)
})
