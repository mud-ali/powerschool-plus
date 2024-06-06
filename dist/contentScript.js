const cheerio = require("cheerio");
const axios = require("axios");

async function webScrape(){
    const axiosResponse = await axios.request({
        method: "GET",
        url: "https://bcts.powerschool.com/guardian/home.html?_userTypeHint=student",
        headers: {
            "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
    const $ = cheerio.load(axiosResponse.data);

    const grades = [];
    const classes = [];


}