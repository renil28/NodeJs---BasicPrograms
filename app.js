const { json } = require("express/lib/response");
const { readFileSync } = require("fs");
var load = () => JSON.parse(readFileSync('data.json'));


function filewriter() {
    const fs = require('fs')
    const jsonFile = require("./data.json")

    var newdata = {
        "emp": "Renil", "sal": 150000
    }
    jsonFile.push(newdata)

    fs.writeFile('data.json',JSON.stringify(jsonFile),err => {
        if (err) throw err;
        console.log("The data has been added in data.json");
    })
}

module.exports = { load };
module.exports.filewriter = filewriter;