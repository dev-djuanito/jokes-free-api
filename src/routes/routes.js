"use strict";

const {v4: uuidv4} = require("uuid");
const axios = require("axios");

module.exports = function (app) {

    app.get("/", async (req, res) => {
        let jokeData = null;

        try {
            jokeData = (await axios.get("https://official-joke-api.appspot.com/jokes/ten")).data;
        } catch (err) {
            console.error(err);
        }

		if (jokeData == null) throw new Error("jokeData is null");

        // Process the data
        const updatedjokeData = jokeData.map((data) => {
            let {type, setup, punchline} = data;
            return {id: uuidv4(), type, setup, punchline};
        });

        const data = {
            titleOfPage: "Welcome",
            routePath: "pages/home",
            content: {
                dataForTitle: "Ten Random Jokes",
                jokes: updatedjokeData
            },
        };

        res.render("mainLayout", data);
    });
};
