// /*sd custom*/
// jQuery( document ).ready(function() {
//    /*Preload particles images*/
//    jQuery.preloadImages = function() {
//     for (var i = 0; i < arguments.length; i++) {
//       jQuery("<img />").attr("src", arguments[i]);
//     }
//   }

//   jQuery.preloadImages(particleParams.mainUrl + particleParams.dataSrcUrl + "1.png",
//     particleParams.mainUrl + particleParams.dataSrcUrl + "2.png",
//     particleParams.mainUrl + particleParams.dataSrcUrl + "3.png"); 
    
//   jQuery('#logo').addClass('sparkling');
//   jQuery('#logo').attr(particleParams.dataSrcAttr,particleParams.mainUrl + particleParams.dataSrcUrl);

//   jQuery("<style type='text/css'>.sparkling{ position:relative;z-index:1300;}.particle{ position:absolute;z-index:1200;top:0px;left:0px;pointer-events:none;} </style>").appendTo("head");
//   var imgsrc_default =particleParams.mainUrl + particleParams.dataSrcUrl; // it will automaticaly add 1.png,2.png etc
//   var spark_types        = 3; //how many types of spark images do we use
//   var particle_number    = 2; //how many particles to be launched at every mouse move
//   var particle_variation = 8; //randomness of the starting position
//   var particle_min_size  = 8; // minimum particle starting size
//   var particle_max_size  = 32; //maximum particle starting size
//   var accel_div     = 8; //higher value -> lower particle distance based on mouse accel
//   var delay         = 10; //delay bewteen mousemove [miliseconds]
//   var dir           = 1; // 1: particles follow the mouse cursor || -1: paricles go the opposite way
//   var particle_life = 700; //how long the particle lasts before gone (speed) [miliseconds]
//   var death_rand    = 60; //how much to spread the particles (how much does it travel)

//   var last_moved=0,now,last_x=-1,last_y=-1,body=jQuery('body'); //nothing to change here
//   jQuery(window).load(function(){
//     body=jQuery('body');

//     mWidth  =jQuery(window).width();
//     mHeight = jQuery(document).height();
//     jQuery('.sparkling').live('mousemove',function(pos){

//       now = new Date().getTime();

//       if (now - last_moved > delay) {
//         if(jQuery(this).attr('data-style') != undefined )
//           setStyle[jQuery(this).attr('data-style')]();
//         else setStyle["reset"]();

//         //Get number of particle types
//         if(jQuery(this).attr('data-src-no') != undefined )
//           spark_types=jQuery(this).attr('data-src-no');

//         //Get image base source  
//         if(jQuery(this).attr('data-src') != undefined )
//           imgsrc=jQuery(this).attr('data-src');
//         else 
//           imgsrc=imgsrc_default;

//         //Mouse is moved for the first time or mouse exited div and now is back
//         if(last_x == -1 ||  now - last_moved > 500){
//           last_x=pos.pageX;
//           last_y=pos.pageY;
//         }

//         //create [particle_number] sparks
//         for(var i=1;i<=particle_number;++i){

//           //cache some randoms
//           var rand1 = Math.random();
//           var rand2 = Math.random();

//           //append the spark to <body> also choose a random type from the `spark_types` available
//           body.append('<img class="particle" src="' + imgsrc + (1+Math.round(rand1 * (spark_types-1))) + '.png"' + "/>");

//           //select the latest/curent added particle
//           var myim = jQuery('.particle:last');

//           //see the direction in which the cursor is moving
//           var xpos = -dir;
//           if(last_x - pos.pageX < 0)
//             xpos = dir;

//           var ypos = -dir;
//           if(last_y - pos.pageY < 0)
//             ypos = dir;

//           //change distance according to mouse acceleration
//           xpos *= Math.abs(Math.floor(last_x - pos.pageX))/accel_div;
//           ypos *= Math.abs(Math.floor(last_y - pos.pageY))/accel_div;

//           //set particle size and position
//           var vari= Math.floor(particle_variation + rand1 * particle_variation);
//           var startt = pos.pageY - vari*(1 - Math.round(rand2));
//           var startl = pos.pageX - vari*(1 - Math.round(rand1));

//           var rand = particle_min_size + Math.floor(rand1 * (particle_max_size-particle_min_size));

//           myim.css('top',startt).css('left',startl).css('width',rand).css('height',rand);

//           randt = startt  + Math.floor(rand1 * death_rand) * ypos;
//           randl = startl + Math.floor(rand2 * death_rand) * xpos;
//           //animate the image using the data above; remove the spark
//           myim.animate({left: randl,top: randt,height: 'toggle',width: 'toggle'},
//             {
//               step: function(now, fx) {
//                 if( (fx.prop == "left" && now + 32 > mWidth ) ||
//                   (fx.prop == "top"  && now + 32 > mHeight)
//                 ){
//                   jQuery(fx.elem).remove();
//                 }

//               },
//               duration: particle_life,
//               complete: function(){ 
//                 jQuery(this).remove();
//               }
//           });
//         }
//         last_moved = now;

//       }
//       last_x=pos.pageX;
//       last_y=pos.pageY;
//     });
//   });
//   var setStyle = {     

//     reset: function(){
//       imgsrc_default =particleParams.mainUrl + particleParams.dataSrcUrl; // it will automaticaly add 1.png,2.png etc
//       spark_types        = 3; //how many types of spark images do we use
//       particle_number    = 2; //how many particles to be launched at every mouse move
//       particle_variation = 8; //randomness of the starting position
//       particle_min_size  = 8; // minimum particle starting size
//       particle_max_size  = 32; //maximum particle starting size
//       accel_div     = 8; //higher value -> lower particle distance based on mouse accel
//       delay         = 10; //delay bewteen mousemove [miliseconds]
//       dir           = 1; // 1: particles follow the mouse cursor || -1: paricles go the opposite way
//       particle_life = 700; //how long the particle lasts before gone (speed) [miliseconds]
//       death_rand    = 60; //how much to spread the particles (how much does it travel)
//     }
//   }
// });

jQuery(function ($) {
  
  var mousePos = {};

 function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  
  $("#logo").mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $("#logo").mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 15;
		
      var image = 'background: url("' + window.location.origin + '/wp-content/themes/Divi-child/particles/spark' + getRandomInt(1, 3) + '.png") no-repeat;';
      
      var sizeInt = getRandomInt(10, 30);
      var size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range, mousePos.y+range) + "px;"; 

      var style = left+top+image+size;
      $("<div class='new-sparkle specific-sparkle" + getRandomInt(1, 6) + "' style='" + style + "'></div>").appendTo('#main-header').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove()}); 
    }
  }, 15);
});


