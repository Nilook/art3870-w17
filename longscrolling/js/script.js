$(document).ready(function(){
  //when the document is ready, do a bunch of stuff
$(window).scrollTop(9800);
  console.log("your document is ready");


var scrollTop = $(window).scrollTop() + $(window).height();
  $(window).scroll(function(){
    //when you are scrolling, do a bunch of stuff

    fromTop = $(window).scrollTop();
    //update the variable fromTop to the current pixels count
    //fromLeft = $(window).scrollLeft();

  /*  if(fromTop<8000){
    console.log("gift is flying");
    //$("#gift").css({"bottom" : fromTop + 300 + "px"});
    $("#crow").css({"bottom" : fromTop + 30 + "px"});
  }

  if(fromTop=8500){
  console.log("gift is here");
  //$("#gift").css({"bottom" : "0"});
  $("#crow").css({"animation-play-state": "running"});
}

if(fromTop<8500){
    $("#crow").css({"bottom" : "10"});
}


  /*  if (fromTop<6000) {
      $(".plane").css({"left": "1500px;"})
    }


  if (fromTop<4000) {
    $(".sun").css({"animation-play-state": "running"})

  }*/

  });//close .scroll
});//clos .ready
