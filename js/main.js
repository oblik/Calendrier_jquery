
$(document).ready(function() {
    $("#main-container").calendar({
        tipsy_gravity: 's', // How do you want to anchor the tipsy notification? (n / s / e / w)
        click_callback: calendar_callback, // Callback to return the clicked date
        //year: "2012", // Optional, defaults to current year - pass in a year - Integer or String
        scroll_to_date: false // Scroll to the current date?
    });



});




// Example of callback - do something with the returned date
var calendar_callback = function(date) {
    console.log(date);

}
