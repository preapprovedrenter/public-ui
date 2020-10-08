/*

=========================================================
* Rocket - Startup Bootstrap Template
=========================================================

* Product Page: https://themes.getbootstrap.com/product/rocket/
* Copyright 2020 Themesberg (https://www.themesberg.com)
* License (https://themes.getbootstrap.com/licenses/)

* Coded by https://themesberg.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/


"use strict";
/* $(document).ready(function () {

    // options
    var breakpoints = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140
    };

    var $navbarCollapse = $('.navbar-main .collapse');

    // Collapse navigation
    $navbarCollapse.on('hide.bs.collapse', function () {
        var $this = $(this);
        $this.addClass('collapsing-out');
        $('html, body').css('overflow', 'initial');
    });

    $navbarCollapse.on('hidden.bs.collapse', function () {
        var $this = $(this);
        $this.removeClass('collapsing-out');
    });

    $navbarCollapse.on('shown.bs.collapse', function () {
        $('html, body').css('overflow', 'hidden');
    });

    $('.navbar-main .dropdown').on('hide.bs.dropdown', function () {
        var $this = $(this).find('.dropdown-menu');

        $this.addClass('close');

        setTimeout(function () {
            $this.removeClass('close');
        }, 200);

    });

    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
      
        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });
      
        return false;
    });

    if ($(document).width() >= breakpoints.lg) {
        $('.nav-item.dropdown').hover(function() {
            $(this).find('> .dropdown-toggle').dropdown('toggle');
        },
        function () {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
            $(this).find('> .dropdown-toggle').attr('aria-expanded', 'false');
        });
    
        $('.dropdown-menu a.dropdown-toggle').hover(function() {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
              }
              var $subMenu = $(this).next(".dropdown-menu");
              $subMenu.toggleClass('show');
            
              $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
                $('.dropdown-submenu .show').removeClass("show");
              });
            
              return false;
        },
        function () {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
            $(this).attr('aria-expanded', false);
        });
    }

    // Background images for sections
    $('[data-background]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
    });

    $('[data-background-color]').each(function () {
        $(this).css('background-color', $(this).attr('data-background-color'));
    });

    $('[data-color]').each(function () {
        $(this).css('color', $(this).attr('data-color'));
    });

    // Datepicker
    $('.datepicker')[0] && $('.datepicker').each(function () {
        $('.datepicker').datepicker({
            disableTouchKeyboard: true,
            autoclose: false
        });
    });

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Popover
    $('[data-toggle="popover"]').each(function () {
        var popoverClass = '';
        if ($(this).data('color')) {
            popoverClass = 'popover-' + $(this).data('color');
        }
        $(this).popover({
            trigger: 'focus',
            template: '<div class="popover ' + popoverClass + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });

    // Additional .focus class on form-groups
    $('.form-control').on('focus blur', function (e) {
        $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
    }).trigger('blur');

    // When in viewport
    $('[data-toggle="on-screen"]')[0] && $('[data-toggle="on-screen"]').onScreen({
        container: window,
        direction: 'vertical',
        doIn: function () {
            //alert();
        },
        doOut: function () {
            // Do something to the matched elements as they get off scren
        },
        tolerance: 200,
        throttle: 50,
        toggleClass: 'on-screen',
        debug: false
    });

    // Scroll to anchor with scroll animation
    $('[data-toggle="scroll"]').on('click', function (event) {
        var hash = $(this).attr('href');
        var offset = $(this).data('offset') ? $(this).data('offset') : 0;

        // Animate scroll to the selected section
        $('html, body').stop(true, true).animate({
            scrollTop: $(hash).offset().top - offset
        }, 600);

        event.preventDefault();
    });

    $('.current-year').text(new Date().getFullYear());
}); */

