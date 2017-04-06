var words = ["ground", "control", "to", "major", "tom"];


function map(words, letterCount) {
  var newArray = [];
  words.forEach(function(entry) {
    newArray.push(letterCount(entry));
  })
  return newArray
}

function letterCount(word) {
  return word.length;
}

console.log(map(words, letterCount));

