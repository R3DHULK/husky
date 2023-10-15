window.onload = function() {
  let belly = document.getElementById("belly");
  let audio = document.getElementById("audio");
  let isPlaying = false;
  
  $(".closed-eyes").hide();
  
  belly.onclick = function() {
    if(isPlaying) {
      audio.pause(); 
      $(".open-eyes").show();
      $(".closed-eyes").hide();
    } else {
      $(".open-eyes").hide();
      $(".closed-eyes").show();
      audio.play();
    }
    toggleAnimation();
  }
  
  audio.onended = function() {
    $(".open-eyes").show();
    $(".closed-eyes").hide();
    toggleAnimation();
  };
  
  function toggleAnimation() {
    isPlaying = !isPlaying;
    $("#head").toggleClass("shake-head");
    $("#tongue").toggleClass("toggle-tongue");
    $("#main-body").toggleClass("shake-main-belly")
    $("#main-body-shadow").toggleClass("shake-main-belly-shadow")
    $("#sub-body").toggleClass("shake-sub-belly")
    $("#sub-body-shadow").toggleClass("shake-sub-belly-shadow")
    $("#left-leg").toggleClass("shake-left-leg");
    $("#right-leg").toggleClass("shake-right-leg");
    $.each($("path.notes"), (idx, ele) => {
       $(ele).toggleClass("play");
    })
  };
}