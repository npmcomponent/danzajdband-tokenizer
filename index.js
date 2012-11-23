
var Tokenizer = function(){};

Tokenizer.prototype.trim = function(array) {

  while(array[array.length - 1] == '') 
    array.pop();

  while(array[0] == '') 
    array.shift();

  return array;
  
};

Tokenizer.prototype.tokenize = function(str) {
  return this.trim(str.split(' '));
};

module.exports = Tokenizer;
