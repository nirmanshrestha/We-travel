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
        $(".up").show()
    }
    else{
        
        $("#header").removeClass('bg-dark');
        $("header").addClass('bg-transparent')
        $(".up").hide()
    }
});

$(".up").click(function (){
    $(window).scrollTop(0);
})

(function(d,t) {
        var BASE_URL="https://omni.diyochat.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.diyochatSDK.run({
            websiteToken: 'K91SCb76o57j9fRWsi135Jrt',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
