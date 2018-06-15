var http = require('http');
var movieList = require("./parser");
var BPlusTree = require('bplustree');

function splitAll(target)
{
    target = target.replaceAll(" ", ",");
    target = target.replaceAll(";", ",");
    target = target.replaceAll("-", ",");
    target = target.replaceAll("_", ",");
    target = target.replaceAll("/", ",");
    target = target.replaceAll(",,", ",");
    target = target.split(",");
    return target;
}

function storeAllInTree(arrayToStore, treeToBeUsed)
{
    for(var i = 0; i < arrayToStore.length; i++)
    {
        treeToBeUsed.store(arrayToStore[i], arrayToStore[i]);
    }
}

String.prototype.replaceAll = function (search, replacement)
{
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
}

function Movie(pTitle, pYear, pDirector, pCast, pGenre, pNotes)
{
    this.movieTitle = pTitle;
    this.movieYear = pYear;
    this.movieDirector = pDirector;
    this.movieCast = pCast;
    this.movieGenre = pGenre;
    this.movieNotes = pNotes;
}

//RUNS

var jsonMovies = movieList.getMovies;

var titleTree = new BPlusTree({order: 6});
var yearTree = new BPlusTree({order: 6});
var directorTree = new BPlusTree({order: 6});
var castTree = new BPlusTree({order: 6});
var genreTree = new BPlusTree({order: 6});
var notesTree = new BPlusTree({order: 6});

jsonMovies.forEach(function (element)
{
    var titleArray = null;
    var directorArray = null;
    var castArray = null;
    var genreArray = null;
    var notesArray = null;
    if(element.title)
    {
        titleArray = splitAll(element.title);
    }
    if(element.director)
    {
        directorArray = splitAll(element.director);
    }
    if(element.cast)
    {
        castArray = splitAll(element.cast);
    }
    if(element.genre)
    {
        genreArray = splitAll(element.genre);
    }
    if(element.notes)
    {
        notesArray = splitAll(element.notes);
    }

    var myMov = new Movie(titleArray, element.year, directorArray, castArray, genreArray, notesArray);

    if(myMov.movieTitle)
    {
        storeAllInTree(myMov.movieTitle, titleTree);
    }
    if(myMov.movieYear)
    {
        yearTree.store(myMov.movieYear, myMov.movieYear);
    }
    if(myMov.movieDirector)
    {
        storeAllInTree(myMov.movieDirector, directorTree);
    }
    if(myMov.movieCast)
    {
        storeAllInTree(myMov.movieCast, castTree);
    }
    if(myMov.movieGenre)
    {
        storeAllInTree(myMov.movieGenre, genreTree);
    }
    if(myMov.movieNotes)
    {
        storeAllInTree(myMov.movieNotes, notesTree);
    }
});
