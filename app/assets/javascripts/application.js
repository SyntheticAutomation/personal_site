// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require_tree .

$(document).ready(function () {
  $(document).on('mouseover', '.box1', function(){
    $('.projects-container').addClass('bg1').removeClass('bg2 bg3 bg4');
    $('.box1 .box').addClass('active');
    $('.box1 h1').addClass('highlight');
    $('.box2 h1').removeClass('highlight');
    $('.box3 h1').removeClass('highlight');
    $('.box4 h1').removeClass('highlight');
    $('.box2 .box').removeClass('active');
    $('.box3 .box').removeClass('active');
    $('.box4 .box').removeClass('active');
  });
  $(document).on('mouseover', '.box2', function(){
    $('.projects-container').addClass('bg2').removeClass('bg1 bg3 bg4');
    $('.box2 .box').addClass('active');
    $('.box2 h1').addClass('highlight');
    $('.box1 h1').removeClass('highlight');
    $('.box3 h1').removeClass('highlight');
    $('.box4 h1').removeClass('highlight');
    $('.box1 .box').removeClass('active');
    $('.box3 .box').removeClass('active');
    $('.box4 .box').removeClass('active');
  });
  $(document).on('mouseover', '.box3', function(){
    $('.projects-container').addClass('bg3').removeClass('bg1 bg2 bg4');
    $('.box3 .box').addClass('active');
    $('.box3 h1').addClass('highlight');
    $('.box1 h1').removeClass('highlight');
    $('.box2 h1').removeClass('highlight');
    $('.box4 h1').removeClass('highlight');
    $('.box1 .box').removeClass('active');
    $('.box2 .box').removeClass('active');
    $('.box4 .box').removeClass('active');
  });
  $(document).on('mouseover', '.box4', function(){
    $('.projects-container').addClass('bg4').removeClass('bg1 bg2 bg3');
    $('.box4 .box').addClass('active');
    $('.box4 h1').addClass('highlight');
    $('.box1 h1').removeClass('highlight');
    $('.box2 h1').removeClass('highlight');
    $('.box3 h1').removeClass('highlight');
    $('.box1 .box').removeClass('active');
    $('.box2 .box').removeClass('active');
    $('.box3 .box').removeClass('active');
  });
  
  // ------------------found the svg logo path length for each letter with this ------------------
  // const logo = document.querySelectorAll("#name-logo path");
  // console.log(logo);

  // for(let i=0; i<logo.length; i++){
  //   console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
  // }
  // ------------------------------------------------------------------------------------------

});
  



