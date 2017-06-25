var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '':  'initializeSearch',
    'flights/:id': 'showFlight'
  },

  initializeSearch: function () {

    // Pass all of the flights to the appview (as a collection)
    var appView = new app.AppView({
      collection: app.flights // this.collection in appView
    });
    appView.render();
  },

  showFlight: function ( id ) {
    console.log("this should now show the seating plan");
    var flight = app.flights.get( id );
    var bookView = new app.BookView({
      model: flight
    });
    bookView.render();
  }
});
