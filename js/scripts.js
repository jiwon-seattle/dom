$(document).ready(function() {
  $("button#lightbackground").click(function() {
    $("body").removeClass();
    $("body").addClass("lightbackground");
  });

  $("button#darkbackground").click(function() {
    $("body").removeClass();
    $("body").addClass("darkbackground");
  });

  $("button#original").click(function(){
    $("body").removeClass();
  });

  $(".text").click(function() {
    $("text").addClass("use");
  });
});
