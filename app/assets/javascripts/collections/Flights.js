var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: "/flights",

  model: app.Flight,

  initialize: function (){
    console.log("A new collection has been created");

  },

});

var flightsCollection = new app.Flights();

flightsCollection.fetch().done(function(){
  flightsCollection.each(function(flight){
    console.log( flight.toJSON() );
  });
});
