import express from "express";
import axios from "axios";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3000;

const __fileName = fileURLToPath(import.meta.url);
const __clientDir = path.resolve(__fileName, "../../client");
app.set("view engine", "ejs");
app.set("views", path.join(__clientDir, "views"));

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`)
})