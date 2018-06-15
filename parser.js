var fs = require("fs");

function getMovies() {
    var json = JSON.parse(fs.readFileSync('C:\\Users\\Dani\\IdeaProjects\\nodePrueba1\\movies.json', 'utf8'));
    return json;
}

module.exports.getMovies = getMovies();

/*
json.forEach(function (element) {
    console.log(element.year + "__" + element.title);
})
*/