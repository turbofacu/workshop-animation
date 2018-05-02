// Main javascript entry point
// Should handle bootstrapping/starting application

var Swiper = require('../_scripts/swiper');

var mySwiper = new Swiper ('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var $ = require('jquery');

$(function() {
  $('.states-item').on('click tap', function() {
    $(this).toggleClass('animated');
  });
  $('.loading-button').on('click tap', function() {
    $(this).addClass('loading');
    setTimeout(function(){
      $('.loading-button').removeClass('loading').addClass('success');
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
