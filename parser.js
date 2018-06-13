var fs = require("fs");

//Total number of movies: 18849
var json = JSON.parse(fs.readFileSync('C:\\Users\\Dani\\IdeaProjects\\nodePrueba1\\movies.json', 'utf8'));

json.forEach(function (element) {
    console.log(element.year + "__" + element.title);
})