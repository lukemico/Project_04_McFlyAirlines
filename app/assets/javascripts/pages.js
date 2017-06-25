var app = app || {};

app.router = new app.AppRouter();

$(document).ready(function () {

  app.flights = new app.Flights();
  app.flights.fetch().done(function () {
    Backbone.history.start();
  });

  console.log("The page has loaded - pages.js");

  $('.findFlight').on("click", function( event ){
    console.log("Hey!");
    // Prevent form submitting
    event.preventDefault();

    // get values from form
    var origin = $( '#_search_origin' ).val();
    // console.log(origin);

    var destination = $('#_search_destination').val();
    // console.log( destination ); // unknown

    // debugger

    // Search database using these variables

    // If there's a result => render
  });

});
