$(document).ready(function(){
  //when the document is ready, do a bunch of stuff
   $(window).scrollTop(9800);
   console.log("your document is ready");

   var scrollTop = $(window).scrollTop() + $(window).height();
   $(window).scroll(function(){
    //when you are scrolling, do a bunch of stuff
    console.log( $(window).scrollTop());
    fromTop = $(window).scrollTop();

    $(window).scroll(function(){
  $("#crow").css({"top": 70 + $(window).scrollTop() + "px"});
  $("#gift").css({"top": 300 + $(window).scrollTop() + "px"});
});


 if (fromTop > 4500 && fromTop < 5200) {
  $(".car").css({"animation-play-state" : "running"});
 }

else{
  $(".car").css({"animation-play-state" : "paused"});
}


 if (fromTop < 1300) {
  $(".plane").css({"animation-play-state" : "running"});
 }

 else{
   $(".plane").css({"animation-play-state" : "paused"});
 }


  });//close .scroll
});//clos .ready*/
