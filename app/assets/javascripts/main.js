$(function(){
  moveRing();
  moveToWhere();
});

var selectedRing = null;

moveRing = function() {
  $(".ring").on("click", function() {
    if ($(this)[0] === $(this).parent().children().first()[0]) {
      selectedRing = $(this)[0];
      debugger;
      // moveToWhere($(this)[0]);
    } else {
      alert("You cannot move that ring right meow.");
    }
  });
};

moveToWhere = function() {
  $(".tower").on("click", function() {
    if (selectedRing !== null) {
      if ($(this)[0] === $(selectedRing).parent()[0]) {
        console.log("Same tower.");
      }
    }
  });
};