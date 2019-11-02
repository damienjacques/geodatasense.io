var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


/* fade-up effect */
AOS.init({
  duration: 1200,
})

 //refresh animations
 $(window).on('load', function() {
    AOS.refresh();
 });


/* Carousel tools & software */
$(document).ready(function() {
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:7,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:5
        },
        600:{
            items:5
        },
        1000:{
            items:7
        }
    }
});
 })   

/* Translation */
$(document).ready(function(){
  
  // By default
  $('.en_lang').addClass("active-lang");
  $('#lang-switch .en').addClass("active-flag");
  
  // Function switch
  $(function() {
    // French button
    $("#lang-switch .fr").click(function() {
      // Enable French
      $('.fr_lang').addClass("active-lang"); 
      
      // Disable English
      $('.en_lang').removeClass("active-lang") 
      
      // Active or remove the opacity on the flags.
      $('#lang-switch .fr').addClass("active-flag");
      $('#lang-switch .en').removeClass("active-flag");
    });
    
    // English button
    $("#lang-switch .en").click(function() {
      
      // Enable English
      $('.en_lang').addClass("active-lang");
      
      // Disable French
      $('.fr_lang').removeClass("active-lang")
      
      // Active or remove the opacity on the flags.
      $('#lang-switch .en').addClass("active-flag");
      $('#lang-switch .fr').removeClass("active-flag");
    });
  });
});

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$('#lang-switch').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
                        

// fallback function for Font Awesome
function ensureCssFileInclusion(cssFileToCheck) {
    var styleSheets = document.styleSheets;
    for (var i = 0, max = styleSheets.length; i < max; i++) {
        if (styleSheets[i].href == cssFileToCheck) {
            return;
        }
    }
    // because no matching stylesheets were found, we will add a new HTML link element to the HEAD section of the page.
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://downtimmonkey.com/path-xxx/font-awesome/css/font-awesome.min.css";
    document.getElementsByTagName("head")[0].appendChild(link);
}

//call function
ensureCssFileInclusion("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");