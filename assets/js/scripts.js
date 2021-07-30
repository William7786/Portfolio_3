const element1 = document.getElementsByClassName(".bannar_title");
const element2 = document.getElementsByClassName(".cross");

// $(".cross").mouseenter (function myFunction() {
//     var element1 = document.getElementsByClassName(".bannar_title");
    
//     element1.classList.remove("hide");
//   })
 


//   const promise1 = new Promise((resolve, reject) => {
//     resolve('Success!');
//   });
  
//   promise1.then(
//       $(".cross").mouseenter =>
//        (function myFunction() {
//         var element1 = document.getElementsByClassName(".bannar_title");
        
//         element1.classList.remove("hide");
//        })
//       )
    
//       $(".cross").mouseenter(function(){
//         $(".gannar_title").css("background-color", "yellow");
//       });
    // expected output: "Success!"
  
    // $(element1).ready(function(){
    //     $("p").mouseenter(function(){
    //       $("p").css("background-color", "yellow");
    //     });
    //     $("p").mouseleave(function(){
    //       $("p").css("background-color", "lightgray");
    //     });
    //   });

    //   $(function() {
    //     $( "cross" ).text( "The DOM is now loaded and can be manipulated." );
    //     });

    
// function hidden() {
//     element2.hover(function(){ 
//     $(element1).addClass('hide', $(element1).attr(".bannar_title"));
//     $(this).attr('title', '');})
   
// }, function() {
//     $(this).attr('title', $(this).data('title'));
// }

(function ($) {
    "use strict"; //Start of use strict

    //Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });
    $(".cross").hover(function () {
        $(".bannar_title").collapse("unhide");
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict


//this is for typing welcome

consoleText([ 'Welcome:)', 'To My Portfolio'], 'text',['black']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  },80)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}
