/* ----------------------------------------------------------------------------------------
~ Author        : Jonathan Jolivette | General Assembly | Adobe Digital Academy
~ Title         : Project 0 | Personal Portfolio Website | General Assembly S.E.I. -51 Course
~ Created       : Feb. 8 2019
~ Last Modified : Feb 19 2019
-------------------------------------------------------------------------------------- */

$(document).ready(function () {

        /*  -------------------------------------------------------------------------  *
         *                       change Menu background on scroll down                 *
         *  -------------------------------------------------------------------------  */
          //www.w3schools.com/howto/howto_js_navbar_sticky.asp

          $(window).on('scroll', function () {
              var menu_area = $('.menu-area');
              if ($(window).scrollTop() > 200) {
                  menu_area.addClass('sticky-menu');
              } else {
                  menu_area.removeClass('sticky-menu');
              }
          });


        /*  -------------------------------------------------------------------------  *
         *                       Navigation js                                         *
         *  -------------------------------------------------------------------------  */
          //www.w3schools.com/bootstrap/bootstrap_navbar.asp
          //www.w3schools.com/jsref/prop_element_scrolltop.asp
          $(document).on('click', '.navbar-collapse.in', function (e) {
              if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                  $(this).collapse('hide');
              }
          });

          //www.w3schools.com/bootstrap/bootstrap_ref_js_scrollspy.asp
          $('body').scrollspy({
              target: '.navbar-collapse',
              offset: 195
          });

        /*  -------------------------------------------------------------------------  *
         *                   Testimonial js using owl carousel package                 *
         *  -------------------------------------------------------------------------  */
          //www.jqueryscript.net/demo/Powerful-Customizable-jQuery-Carousel-Slider-OWL-Carousel/
          $(".testimonial-list").owlCarousel({
              items: 2,
              autoPlay: true,
              navigation: true,
              itemsDesktop: [1199, 2],
              itemsDesktopSmall: [980, 1],
              itemsTablet: [768, 1],
              itemsTabletSmall: false,
              itemsMobile: [479, 1],
              pagination: false,
              autoHeight: true,
              navigationText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
          });

    }); //Conclusion document.ready
