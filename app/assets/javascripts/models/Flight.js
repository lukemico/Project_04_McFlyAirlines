var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',

  defaults: {
    airplane_id: 13,
  },

  initialize: function () {
    console.log("A new flight was created");
  }

});
