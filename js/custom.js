$(document).ready(function () {
  var $window = $(window);

  function scroll_elements() {
    var scroll = $window.scrollTop();
    var scrollLayer1 = scroll / 1.4;
    var scrollLayer2 = scroll / 1.2;
    $(".layer1").css(
      "-webkit-transform", "translate3d(0," + scrollLayer1 + "px,0)",
      "transform", "translate3d(0," + scrollLayer1 + "px,0)"
    );
    $(".layer2").css(
      "-webkit-transform", "translate3d(0," + scrollLayer2 + "px,0)",
      "transform", "translate3d(0," + scrollLayer2 + "px,0)"
    );
  }
  // load logo page
  $("#top-logo-placeholder").load("top-logo.html");
  // get time for maintance message
  var result = getTime();
  if (result == true) {
    jQuery(".box").show();
    $window.scroll(scroll_elements);
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        $(".box").hide();
      } else {
        $(".box").show();
      }
      lastScrollTop = st;
    });
  } else {
    jQuery(".box").hide();
  }

});
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function getTime() {

  var startalertTime = new Date();
  startalertTime.setHours(01, 15, 0); // 01.30 am
  var endalertTime = new Date();
  endalertTime.setHours(02, 00, 0); // 2.00 am
  var currentTime = new Date();
  var currentOffset = currentTime.getTimezoneOffset();
  var ISTOffset = 330; // IST offset UTC +5:30
  var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);

  // ISTTime now represents the time in IST coordinates

  var hoursIST = ISTTime.getHours()
  var minutesIST = ISTTime.getMinutes()
  if (ISTTime >= startalertTime && ISTTime < endalertTime) {
    return true;
  } else {
    return false;
  }

}