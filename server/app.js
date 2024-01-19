import express from "express";
import axios from "axios";
import { fileURLToPath } from "url";
import path from "path";
import bodyParser from "body-parser";
import defineHistoricalDate from "../server/utils/defineHistoricalDate.js";

const app = express();
const port = 3000;
const API_URL = "api.frankfurter.app";

const __fileName = fileURLToPath(import.meta.url);
const __clientDir = path.resolve(__fileName, "../../client/");

app.set("view engine", "ejs");
app.set("views", path.join(__clientDir, "views"));
app.use(express.static(__clientDir));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());


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
});

app.post("/convert", async (req, res) => {
    try {
        
        const amount = req.body.amount.slice(4).replace(/\.?0+$/, '');
        const from = req.body.fromCurrency;
        const to = req.body.toCurrency;

        const response = await axios.get(`https://${API_URL}/latest?amount=${amount}&from=${from}&to=${to}`);
        const convertedValue = response.data;

        res.json({ rates: convertedValue.rates });
    } catch (error) {
        console.log(error)
    }
});

app.post("/historical", async (req, res) => {
    try {
        const currencyCode = req.body.currency;
        const date = req.body.historicalDate;

        const historicalDate = defineHistoricalDate(date);

        const historicalResponse = await axios.get(`https://api.frankfurter.app/${historicalDate}..?to=${currencyCode}`);
        const historicalRates = historicalResponse.data;

        res.json({ historicalRates: historicalRates.rates });
    } catch (error) {
        console.log(error)
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
});