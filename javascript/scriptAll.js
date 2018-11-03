(function ($) { // Begin jQuery
  $(function () { // DOM ready

   // Fakes the loading screen by setting a timeout
    $(document).ready(function() {
      if($('body').is('.home')){   
         setTimeout(function() {
             $('body').addClass('loaded');
         }, 1200);

        }else if($('body').is('.store')){
          setTimeout(function() {
            $('body').addClass('loaded');
        }, 0);

        }else{
          setTimeout(function() {
            $('body').addClass('loaded');
        }, 0);

        }
     });



    // If a link has a dropdown, add sub menu toggle
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-menu-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-menu-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });

    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.nav-menu-dropdown').hide();
    });

    // Toggle open and close nav styles on click
    $('#nav-hamburger-toggle').click(function () {
      $('nav ul').slideToggle();
    });

    // Toggles change from Hamburger to X
    $('#nav-hamburger-toggle').on('click', function () {
      this.classList.toggle('active');
    });



    // When click on link header, opens dropdown links
    $(function () {
      $('.footer-links-header h3').click(function () {
        $(this).parent().toggleClass('active');
      });
    });



    // For store category dropdown for mobile, click to change category
    $("#select").change(function() {
      window.location = $(this).find("option:selected").val();
    });



    //Product details page add-to-cart footer stops before a 
    //specific point(Before the main footer)
    function checkOffset() {
      var a=$(document).scrollTop()+window.innerHeight;
      var b=$('footer').offset().top;
      if (a<b) {
        $('#product-details-footer').css('bottom', '0px');
      } else {
        $('#product-details-footer').css('bottom', (0+(a-b))+'px');
      }
    }
    $(document).ready(checkOffset);
    $(document).scroll(checkOffset);



    // Toggle visibility of FAQ answer paragraphs
    $(function () {
      $('.faq-header h3').click(function () {
        $(this).parent().toggleClass('active');
      });
    });




    //Scrolls to top in lookbook
    $(function(){$('.scroll').click(function(){$("html,body").animate({scrollTop:$('.thetop').offset().top},'800');return false})});

  }); // end DOM ready
})(jQuery); // end jQuery