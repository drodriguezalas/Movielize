var BPlusTree = require('bplustree');

/*
var tree = new BPlusTree({order: 6});
console.log(tree.depth());
tree.store(0,"0");
tree.store(1,"1");
tree.store(2,"2");
tree.store(3,"3");
tree.store(4,"4");
tree.store(5,"5");
tree.store(6,"6");
tree.store(7,"7");
tree.store(8,"8");
tree.store(9,"9");
tree.store(10,"10");
tree.store(11,"11");
tree.store(12,"12");
tree.store(13,"13");
tree.store(14,"14");
tree.store(15,"15");
tree.store(16,"16");
tree.store(17,"17");
tree.store(18,"18");
tree.store(19,19);
console.log(tree.depth());
console.log(tree.fetchRange(10,15));
*/

/*
var tree = new BPlusTree({order: 6});
var prueba = "year";
var total = 0;
prueba = prueba.toUpperCase();
for(var charPos = 0; charPos < prueba.length; charPos++)
{
    total += prueba.charCodeAt(charPos);
    console.log(prueba[charPos] + "_" + prueba.charCodeAt(charPos) );
}
tree.store(total, prueba);
console.log(total);
*/

var tree = new BPlusTree({order: 6});

tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");
tree.store("Gerald", "Gerald");

console.log(tree.fetchRange("Gerald", "Gerald"));
