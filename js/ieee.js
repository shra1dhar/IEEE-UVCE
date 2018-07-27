  // ************************************************************************
  // Copy of this code in embeded inline in index.html to increase efficiency
  // ************************************************************************

$(".bars").hide();
$(".upper-section").hide();
$("#sig-box").hide();
$("#kagada-impetus").hide();
$("#awards").hide();
$("#team").hide();
$("#execom").hide();
$("#repcom").hide();
$("#foot").hide();

$(document).ready( () => {
  $(".svg-wrapper").click( () => {
    $(".overlay").hide('slow');
    $(".film").css("display", "block");
    $(".film").addClass("light");
    setTimeout( () => {
      $(".bars").show();
      $(".upper-section").show();
      $("#sig-box").show();
      $("#kagada-impetus").show();
      $("#awards").show();
      $("#team").show();
      $("#execom").show();
      $("#repcom").show();
      $("#foot").show();
      $(".film").hide();
      new WOW().init();
    }, 3000);
  });
});

function membersAppear(){
  $(".bars").hide();
  $(".upper-section").hide();
  $("#sig-box").hide();
  $("#kagada-impetus").hide();
  $("#awards").hide();
  $("#team").hide();
  $("#foot").hide();
  $("#members").css("display", "block");
  // setTimeout( () => {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }, 0);
  $("#members").css("animation", "appear 1s ease-in 0s");
}

function membersHide() {
  $("#members").css("animation", "reverseAppear 0.7s ease-in 0s");
  $("#members").css("display", "none");
  $(".bars").show();
  $(".upper-section").show();
  $("#sig-box").show();
  $("#kagada-impetus").show();
  $("#awards").show();
  $("#team").show();
  $("#foot").show();
}

