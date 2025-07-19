import dotenv from "dotenv";
dotenv.config();

import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_KEY = process.env.API_KEY;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
    headers: {
        'Accept': 'application/json',
        'X-CMC_PRO_API_KEY': API_KEY,
        'Accept-Encoding': "deflate, gzip"
}};

app.get("/", async (req, res)=>{
    try {
        const mapResponse = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=50", config);
        console.log("successfully fetch data for selectors");
        res.render("index.ejs", {content: mapResponse.data, result: null});
    } catch (error) {
        console.log(`fail to fetch data for selectors: ${error.message}`);
        res.render("index.ejs", {result: null, content: []});
    }
});

app.get("/data", async (req, res)=>{
    try {
        const chosenId = req.query.id;
        console.log(chosenId);
        const quoteResponse = await axios.get(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${chosenId}` ,config);
        const mapResponse = await axios.get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=50", config);

        const coin = quoteResponse.data.data[chosenId];
        console.log(`successfully fetch coin ${coin.name}`);
        res.render("index.ejs", {result: coin, content: mapResponse.data});
        
    } catch (error) {
        console.log(`fail to fetch data: ${error.message}`);
        res.render("index.ejs", {result: error.message, content: []});
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});