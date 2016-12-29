var extractor = require("./src/unfluff.coffee");

module.exports = {
  run: function (html) {
   	 return extractor(html); 
  }
};
