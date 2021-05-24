$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      loop:true,
      
      
      margin:10,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },            
      }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });
  var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.right-arrow').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.left-arrow').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

$(window).scroll(function(){
    if($(this).scrollTop()> 200){
       
        $("#header").addClass('bg-dark');
        $("header").removeClass('bg-transparent')
    }
    else{
        
        $("#header").removeClass('bg-dark');
        $("header").addClass('bg-transparent')
    }
})