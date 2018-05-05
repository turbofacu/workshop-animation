// Main javascript entry point
// Should handle bootstrapping/starting application

var Swiper = require('../_scripts/swiper');

var mySwiper = new Swiper ('.swiper-container', {
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true
  },
});


var $ = require('jquery');

$(function() {
  $('.states-item').on('click tap', function() {
    $(this).toggleClass('animated');
  });
  $('.loading-button').on('click tap', function() {
    var button = $(this);
    button.addClass('loading');
    setTimeout(function(){
      button.removeClass('loading').addClass('success');
    }, 2000);
  });
  $('#ui-input').on('keyup', function() {
    console.log($(this).val());
    if($(this).val().length >= 3 ) {
      $('#input-button').removeClass('inactive');
    } else {
      $('#input-button').addClass('inactive');
    }
  });
});
