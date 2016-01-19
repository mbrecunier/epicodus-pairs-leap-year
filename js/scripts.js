var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

var validateEntry = function(year) {
  if ((year <= 0) || isNaN(year)) {
    return false;
  } else {
    return true;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    validateEntry();

    if(validateEntry) {
      if (!result) {
        $(".not").text("not");
      } else {
        $(".not").text("");
      }
      $(".year").text(year);

      $("#result").show();
    } else {
      $("#error").show();
      return false;
    }

    event.preventDefault();
  });
});
