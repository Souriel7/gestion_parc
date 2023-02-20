// Importing express
import express from "express";

// import bodyParser from "body-parser";

// Importing routes from routers folder
import technicienRouter from './routes/technicien.js'

// Getting express features by app variable
const app = express();

// Make PORT constant for listening
const PORT = 7000;

// Using json body parser to automatically read and parse information we sent
app.use(express.json());

// sending information by the server
app.get('/', (request, response) => {
    response.send("Gestion activité d'un atelier informatique");
});

app.use("/techniciens", technicienRouter);

app.listen(PORT, () => console.log(`The server is running on ${PORT}`))