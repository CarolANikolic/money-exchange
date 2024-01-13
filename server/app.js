import express from "express";
import axios from "axios";
import { fileURLToPath } from "url";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "api.frankfurter.app";

const __fileName = fileURLToPath(import.meta.url);
const __clientDir = path.resolve(__fileName, "../../client/");

app.set("view engine", "ejs");
app.set("views", path.join(__clientDir, "views"));
app.use(express.static(__clientDir));
app.use(bodyParser.urlencoded({ extended: true}));


app.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://${API_URL}/currencies`);
        const currenciesObject = response.data;
        const currenciesArray = Object.entries(currenciesObject).map(([code, name]) => ({ code, name }));

        res.render("index.ejs", { currencies: currenciesArray });
    } catch (error) {
        console.log("Error fetching currencies:", error);
        res.status(500).send("Internal server error")
    }
})

app.post("/convert", async (req, res) => {
    try{
        console.log(req.body.amount);
        console.log(req.body.fromCurrency);
        console.log(req.body.toCurrency);
    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})