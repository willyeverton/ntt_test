/**
 * @file
 * Movies in spotlight View.
 *
 */
(function ($, Drupal) {
    'use strict';
  
    Drupal.behaviors.moviesInSpotlightView = {
      attach: function (context, settings) {

        // Change the target to open in a new tab
        $('.view-id-movies_in_spotlight .views-field-field-poster a').attr('target', '_blank');
        $('.view-id-movies_in_spotlight .views-field-title a').attr('target', '_blank');

        // Define the maximum number of characters
        var maxLength = 750;

        $('.view-id-movies_in_spotlight .views-field-field-synopsis .field-content').each(function() {
            var description = $(this).text();
            if (description.length > maxLength) {
                var shortened = description.substr(0, maxLength);
                // Adds "..." at end of truncated description
                $(this).text(shortened + '...');
            }
        });
      }
    }
  })(jQuery, Drupal);
  