"use strict";

// text target
const textOfTitle = "Ten Random Jokes";

// selectors
const listOfJokes = "div.list-group";
const listOfJokesItem = "div.list-group a";

// timmings
const smallTime = 2000;
const mediumTime = 6000;

module.exports = {
    "@disabled": false, // If value is true, this prevent this test module from running.

    before: function (browser) {
        browser.maximizeWindow();
        browser.url("http://localhost:8080");
        browser.waitForElementVisible("body");
        browser.pause(mediumTime);
    },

    after: function (browser) {
        browser.end();
    },

    "Main title of Home page should be correct": function (browser) {
        browser.expect.element("h1").text.to.equal(textOfTitle);
    },

    "List of jokes will be available": function (browser) {
        browser.expect.element(listOfJokes).to.be.visible;
        browser.assert.elementPresent(listOfJokes);
    },

    "Ten list of jokes are presented": function (browser) {

        //Get an WebElement JSON object array of all jokes
        browser.elements("css selector", listOfJokesItem, function (jokesArray) {
			browser.assert.equal(jokesArray.value.length, 10)
        });
    },
};
