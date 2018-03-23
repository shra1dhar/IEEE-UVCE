$(document).ready(function(){
      if (window.matchMedia("(max-width: 495px)").matches) {
        $("body").removeClass("container").addClass("container-fluid");
      }
});
