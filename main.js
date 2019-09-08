//Materialize initializations
document.addEventListener("DOMContentLoaded", function() {
  var elem = document.querySelector(".collapsible.expandable");
  var instance = M.Collapsible.init(elem, {
    accordion: false,
    onOpenStart: function(e) {
      $(e)
        .find("i")
        .html("expand_more");
    },
    onCloseStart: function(e) {
      $(e)
        .find("i")
        .html("chevron_right");
    }
  });
});
