var app = app || {};

app.Reservations = Backbone.Collection.extend({
  url: "/reservations",

  model: app.Reservation,

  initialize: function () {
    this.on("add", function ( reservation ) {
      console.log("A new instance of the reservation view was created");
      var reservationView = new app.ReservationView({
        model: reservation
      });
      reservationView.render();
    });
  }
});
