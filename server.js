const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = { origin: "http://localhost:8081" };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const db = require('./app/models');
// reseting db on start/stop
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// app.get('/', (req, res) => {
//     res.json({ message: "Welcome to my app." });
// })

require('./app/routes/tutorial.routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}.`);
});