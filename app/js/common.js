$(function() {

  $("a[href*='#']").mPageScroll2id();

	// MOBILE NAVIGATION Opening Function  
  $(".burger").click(function() {
    $(".mobile-navigation").toggleClass("active");
    $('body').toggleClass('noscroll');
  });
  $(".close").click(function() {
    $(".mobile-navigation").toggleClass("active");
    $('body').toggleClass('noscroll');
  });

  $(".worm").click(function() {
		$(".mobile-navigation").toggleClass("active");
		$('body').toggleClass('noscroll');
	}).append("<span>");

  // CAROUSELS 

  $(".partners-carousel").owlCarousel({
    items: 1,
    smartSpeed: 700,
    animateOut: 'slideOutUp',
    animateIn: 'flipInX',
    navText: ['<img src="img/left.svg" alt="left" />','<img src="img/right.svg" alt="right" />'],
    autoplay: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: true,
    nav: true,
  });

  $(".press-carousel").owlCarousel({
    items: 1,
    smartSpeed: 700,
    animateOut: 'slideOutUp',
    animateIn: 'flipInX',
    loop: true,
    dots: true,
  });

  $(".advisors-carousel").owlCarousel({
    items: 1,
    smartSpeed: 700,
    animateOut: 'slideOutUp',
    animateIn: 'flipInX',
    loop: true,
    dots: true,
  });
  $(".team-carousel").owlCarousel({
    items: 1,
    smartSpeed: 700,
    animateOut: 'slideOutUp',
    animateIn: 'flipInX',
    loop: true,
    dots: true,
  });
  
  $(".partnerspage-carousel").owlCarousel({
    items: 1,
    smartSpeed: 700,
    animateOut: 'slideOutUp',
    animateIn: 'flipInX',
    loop: true,
    dots: true,
  });

  //E-mail Ajax Send
  $("form.main-callback-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.form-success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.form-success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 1500);
    });
    return false;
  });

  //E-mail Ajax Send
  $("form.callback-form").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.form-success').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.form-success').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 1500);
    });
    return false;
  });

  //*** ANIMATION ****//


  // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  //MAIN SLIDE
  var mainSlideAnimation = new TimelineMax();
    mainSlideAnimation
       .fromTo('.b1', 1, {y:0}, {y:-50}, 0)
       //.fromTo('.b2', 1, {y:0}, {y:-50}, 0)
       .fromTo('.b3', 1, {y:0}, {y:-150}, 0)
       .fromTo('.b4', 1, {y:0, opacity:1, scale: 1}, {y:100, opacity:0.3, scale: 0.75}, 0)

  var mainSlideAction = new ScrollMagic.Scene({
    triggerElement: '.main-slide',
    triggerHook: 0.1,
    duration: '80%'
  })
  .setTween(mainSlideAnimation)
  //.addIndicators({
  //  name: 'main-slide'
  //})
  .addTo(controller);


  //SECOND SLIDE
  var secondSlideAnimation = new TimelineMax();
      secondSlideAnimation
        .fromTo('.b2-2', 0.5, {x:20, opacity:0}, {x:0, opacity:1}, 0)
        .fromTo('.b2-3', 0.5, {x:20, opacity:0}, {x:0, opacity:1}, 0.5)
        .fromTo('.b2-4', 0.5, {x:20, opacity:0}, {x:0, opacity:1}, 1)

  var secondSlide = new ScrollMagic.Scene({   
    triggerElement: '.second-slide',
    triggerHook: 0.4,
    reverse: true,
  })
  .setTween(secondSlideAnimation)
  //.addIndicators({
  //  name: 'second-slide'
 // })
  .addTo(controller);

  // FIFTH SLIDE
  var fifthSlide = new ScrollMagic.Scene({   
    triggerElement: '.fifth-slide',
    triggerHook: 0.4,
    reverse: false,
  })
  .setClassToggle('.legend-item', 'active')
  .on('start', function () {
    var ctx = document.getElementById("canvas");
    var Canvas = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
          ],
          datasets: [
          {
            data: [30, 25, 15, 15, 10, 5],
            backgroundColor: [
            "#012169",
            "#2DB6E6",
            "#945F37",
            "#C6AA76",
            "#D1CCC7",
            "#768691"
            ]
          }]
        },
        options: {
          responsive: true,
          legend: {
            display: false,
            //position: 'right',
          },
          tooltips: {
           enabled: false
          },
          layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
              }
          },
          animation: {
            duration: 3000,
          }
        }
      })
  })
  //.addIndicators({
  //  name: 'fifth-slide'
  //})
  .addTo(controller);

  //TEAM SLIDE
  var teamSlideAnimation = new TimelineMax();
    teamSlideAnimation
       .fromTo('.t1', 1, {y:0}, {y:-60}, 0)
       .fromTo('.t2', 1, {y:0}, {y:-30}, 0)
       .fromTo('.t4', 1, {opacity:1, y:0}, {opacity:0, y: -30}, 0)
       .fromTo('.t5', 1, {y:0}, {y:-70}, 0)


  var mainSlideAction = new ScrollMagic.Scene({
    triggerElement: '.main-slide',
    triggerHook: 0.1,
    duration: '80%'
  })
  .setTween(teamSlideAnimation)
  //.addIndicators({
  //  name: 'main-slide'
  //})
  .addTo(controller);

  //PARTNERS SLIDE
  var partnersSlideAnimation = new TimelineMax();
    partnersSlideAnimation
       .fromTo('.p1', 1, {y:0}, {y:-100}, 0)
       .fromTo('.p2', 1, {scale:1}, {scale:1.4}, 0)
       .fromTo('.p3', 1, {scale:1,opacity:1,y:0}, {scale:0.7,opacity:0,y:-20}, 0)


  var mainSlideAction = new ScrollMagic.Scene({
    triggerElement: '.main-slide',
    triggerHook: 0.1,
    duration: '80%'
  })
  .setTween(partnersSlideAnimation)
  //.addIndicators({
  //  name: 'main-slide'
  //})
  .addTo(controller);

  // END OF ANIMATION


});

$(window).on('load', function() {
  $('.animation').delay(1000).fadeOut('slow');
  setTimeout(function(){
    //MAIN PAGE Animation
    var mainSlideTl = new TimelineMax();
    mainSlideTl
      //.staggerFromTo('.main-mnu ul li', 1, {y:-100, opacity: 0}, {y:0, opacity: 1}, 0.1)
      .fromTo('.b1', 1, {y:20}, {y:0}, 0)
      .fromTo('.b2', 1.5, {y:-50}, {y:0}, 0)
      .fromTo('.b3', 1, {y:-30}, {y:0}, 0)
      .fromTo('.b4', 1, {y:50, opacity:0}, {y:0,opacity:1}, 0.5)
    //TEAM PAGE Animation  
    var teamSlideTl = new TimelineMax();
    teamSlideTl
      //.staggerFromTo('.main-mnu ul li', 1, {y:-100, opacity: 0}, {y:0, opacity: 1}, 0.1)
      .fromTo('.t1', 1, {y:-100}, {y:0}, 0)
      .fromTo('.t2', 1, {y:-30}, {y:0}, 0)
      //.fromTo('.t3', 1, {y:-30}, {y:0}, 0)
      .fromTo('.t4', 0.75, {y:20,opacity:0}, {y:0,opacity:1}, 0.75)
      .fromTo('.t5', 1, {y:-100, opacity:0}, {y:0,opacity:1}, 0.5)
    //PARTNERS PAGE Animation  
    var partnersSlideTl = new TimelineMax();
    partnersSlideTl
      .fromTo('.p1', 1, {y:-100}, {y:0}, 0)
      .fromTo('.p2', 1, {opacity:0}, {opacity:1}, 0.5)
      .fromTo('.p3', 0.5, {scale:0.7,opacity:0}, {scale:1,opacity:1}, 0.75)

  },900)
   

});

