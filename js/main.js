$(function() {
    
// Выпадающее меню
$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
})

//slick-slider
$('.reviews-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    waitForAnimate: false,  
    responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }
  ]
});

//Accordion 
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
    $('.t1').click();
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})

    
});
