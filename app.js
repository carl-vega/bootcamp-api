$.getJSON("/", function(data) {
  for (var i = 0; i < data.length; i++) {
    $("#session-area").append("");
  }
});
