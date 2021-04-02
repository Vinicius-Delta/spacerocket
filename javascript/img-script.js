$(document).ready(function() {
  $(".img_onclick").click(function() {
    $(".fade-image-container img.top").toggleClass("transparent");
  });

  $(".dropdown-trigger").dropdown();
});
