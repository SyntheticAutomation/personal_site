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


  // ----------- Particle Animations --------------
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray;

  // get mouse position

  let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
  }

  window.addEventListener('mousemove', 
    function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
    });

  // create particle
  class Particle {
    constructor(x, y, directionX, directionY, size, color) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
      this.color = color;
    }
    // method to draw individual particle
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = '#fff';
      ctx.fill();
    }
    // check particle & mouse positions, move & draw the particle
    update () {
      // check if particle is stil within the canvas
      if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX
      }
      if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }

      // check circular collision detection - mouse position vs particle position
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx*dx + dy*dy);
      if (distance < mouse.radius / 2 + this.size) {
        // if its smaller then there is a collision
        if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
          this.x += 10;
        }
        if (mouse.x > this.x && this.x > this.size * 10) {
          this.x -= 10;
        }
        if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
          this.y += 10;
        }
        if (mouse.y > this.y && this.y > this.size * 10) {
          this.y -= 10;
        }
      }
      // move particle
      this.x += this.directionX;
      this.y += this.directionY;
      // draw particle
      this.draw();

    }

  }

  // create particle array
  function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i= 0; i < numberOfParticles; i++) {
      let size = (Math.random() * 5) + 1;
      let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
      let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
      let directionX = (Math.random() * 5) - 2.5;
      let directionY = (Math.random() * 5) - 2.5;
      let color = '#fff';

      particlesArray.push(new Particle(x, y, directionX, directionY, size, color));

    }
  }

  // check if particles are close enough to draw line between each other
  function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
      for (let b= a; b < particlesArray.length; b++) {
        let distance = (( particlesArray[a].x - particlesArray[b].x ) * ( particlesArray[a].x - particlesArray[b].x )) 
        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
        if (distance < (canvas.width/7) * (canvas.height/7)) {
          opacityValue = 1 - (distance/20000);
          ctx.strokeStyle='rgba(255,255,255,1)' + opacityValue + ')';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
          ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
          ctx.stroke();
        }}}};
  


  // animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
  }

  // resize event
  window.addEventListener('resize',
  function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = ((canvas.height/80) * (canvas.width/80));
    init();
  });

  // mouse out event
  window.addEventListener('mouseout',
    function() {
      mouse.x = undefined;
      mouse.y = undefined;
  });

  

  init();
  animate();
  
});
  



