var app = app || {};

app.BookingView = Backbone.View.extend({

  el: '#main',
  events: {
    "click #selectSeat": 'saveBooking',
    "click .seat-big": 'selectSeatByClick'
  },
  render: function(options) {
    console.log(this.model.plane.attributes.rows, this.model.plane.attributes.columns);
    var bookingViewTemplate = $('#bookingView-template').html();
    var bookingViewHTML = _.template(bookingViewTemplate);
    this.$el.html(bookingViewHTML(this.model.plane.attributes));

    var rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var plane = this.model.plane.attributes;
    var rowindex = 0;

    _(plane.rows).times(function() {
      $row = $("<div/>").addClass('row');
      var row = rowLetters[rowindex++];
      var column = 1;
      _(plane.columns).times(function() {
        if (column > plane.columns) {
          column === 0;
        }
        $seat = $('<div/>').addClass('seat-big');
        $seat.attr('id', row + (column++));
        $seat.appendTo($row);
      });
      var index = 0;
      $row.prepend($('<div/>').addClass('row-letter-big').text(row)).appendTo($('#seatsView'));
    });


    $seatNumRow = $('<div/>').addClass('seat-num-row');
    var column = 1;
    _(plane.columns).times(function() {
      $seatNum = $('<div/>').addClass('seat-num-big');
      $seatNum.text(column++);
      $seatNum.appendTo($seatNumRow);
      $seatNumRow.prependTo($('#seatsView'));
    });
    var object = this;
    setInterval(function () {object.fetchData()}, 1000);
  },

  fetchData: function() {

    this.reservations = new app.Reservations();
    this.reservations.fetch({
              data: {
                flight_id: this.model.flight.attributes.id
                  }
           }).done(function (result) {
              for (var i = 0; i < result.length; i++) {
                $('#'+ result[i][1]).addClass('booked').html(result[i][0]);
              }
           });
  },

  selectSeatByClick: function(event){
      if ($(event.currentTarget).hasClass('booked')) {
         alert("Seat is already booked.");
      }else {
        $('.seat-selected').removeClass('seat-selected');
        $(event.currentTarget).addClass('seat-selected');
        seatNum = event.currentTarget.id;
        $('#seatNumber').val(seatNum);
      }
  },

  saveBooking: function(event) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      $('.seat-selected').removeClass('seat-selected');
      var view = this;
      var flight_id = view.model.flight.attributes.id;
      var user_name = $('#user_name').val();
      var seatid = $('#seatNumber').val();
      var $seat = $('#' + seatid);
      $seat.addClass('booked').html(user_name);

      $('#seatNumber, #user_name').val('') ;
      var reservation = new app.Reservation ({
        flight_id: flight_id,
        user_name: user_name,
        seat: seatid
      });
      reservation.save();
    }

});
