#!/usr/bin/node
// Script that listen for changes on each input checkbox tag

// This function ensures the DOM is fully loaded before executing the script
$(document).ready(function() {
    const nameAmenity = [];

    // Listen for changes on each checkbox
    $('input:checkbox').click(function () {
      // checkbox was checked
        if ($(this).is(":checked")) {
        nameAmenity.push($(this).attr('data-name'));
    // if the checkbox is unchecked, you must remove the Amenity ID from the variable
    } else {
        const nameIndex = nameAmenity.indexOf($(this).attr('data-name'));
        nameAmenity.splice(nameIndex, 1);
    }
    // update the h4 tag inside the div Amenities with the list of Amenities checke
     $('.amenities h4').text(nameAmenity.join(', '));
    });
});
