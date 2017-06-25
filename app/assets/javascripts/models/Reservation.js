var app = app || {};

app.Reservation = Backbone.Model.extend({
  urlRoot: '/reservations',

  defaults: {
    columns: "N/A",
    rows: "N/A",
    flight_id: 17,
    user_id: 22
  },

  initialize: function () {
    console.log("A new reservation was created");
  }

});
