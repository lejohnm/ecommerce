 $(function() {
    //configuration
    var width= 700; 
     var animationSpeed= 1000;
     var pause= 3000;
    var currentSlide= 1;
     //cache DOM
     var $slider= $('#slider');
     var $slideContainer= $slider.find('.slide');
    var slide= $slideContainer.find('.slides');


     var interval;
    

    setInterval(function() {
         $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
             currentSlide++;
             if(currentSlide=== $slides.length);{
                currentSlide = 1;
                 $slideContainer.css('margin-left', 0);
             }
         });
     }, pause);

     $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);
// //listen for mouseenter and pause

// //resume on mouseleave
 });