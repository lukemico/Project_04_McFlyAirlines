var app = app || {};

app.FlightView = Backbone.View.extend({
  tagName: "li",

  events: {
    'click': 'flightClicked'
  },

  flightClicked: function () {
    var id = this.model.get("id");
    app.router.navigate("flights/" + id, true);
    console.log("A FLIGHT WAS CLICKED");
  },

  render: function () {
    console.log( this.model.toJSON() );
    var message = "Origin: " + this.model.get("origin");
    message += ". Destination: " + this.model.get("destination");
    message += ". Flight number: " + this.model.get("flight_number");
    var flightNumber = this.model.get("flight_number");
    this.$el.html( message );
    // this.$el.html( JSON.stringify(this.model.toJSON()) );
    this.$el.prependTo("#flights");
  }
});
