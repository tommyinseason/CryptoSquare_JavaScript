//It's Business Time!
var encrypt = function(code) {
      code = code.replace(/[.,\/#!$%\^&\*;:{}=\-?_`~()]/g,"").replace(/\s/g,"");
      var columns = Math.sqrt(code.length);
      columns = Math.ceil(columns);
      var codeArray = code.split("");
      var outputArray = [];
      for (var rows = 0; rows < columns; rows++) {
        for (var i = 0; i < columns; i++){
          if(!outputArray[i]) {outputArray[i] = []};
          outputArray[i].push(codeArray[(rows * columns) + i]);
        }
      }
      var flattenOutput = outputArray.reduce(function(a,b){
        return a.concat(b);
      }, []);
      code = flattenOutput.join("");
      return(code);
}

// User Interface Logic //
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
      event.preventDefault();
      var code = $("#input").val();
      code = encrypt(code);
      $("#outputString").text(code);
    });
  });
