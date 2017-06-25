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






















































(function () {

    var seats = [],
        EMPTY = "\xA0",
        score,
        moves,
        book = "X",
        oldOnload,

    wins = [7, 56, 448, 73, 146, 292, 273, 84],

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's book.
     */
    startNewBooking = function () {
        var i;

        book = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        for (i = 0; i < seats.length; i += 1) {
            seats[i].firstChild.nodeValue = EMPTY;
        }
    },

    /*
     * Returns whether the given score is a winning score.
     */
    win = function (score) {
        var i;
        for (i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    set = function () {
        if (this.firstChild.nodeValue !== EMPTY) {
            return;
        }
        this.firstChild.nodeValue = book;
        moves += 1;
        score[book] += this.indicator;
        if (win(score[book])) {
            alert(book + " wins!");
            startNewBooking();
        } else if (moves === 9) {
            alert("Cat\u2019s game!");
            startNewBooking();
        } else {
            book = book === "X" ? "O" : "X";
        }
    },

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    play = function () {
        var board = document.createElement("table"),
            indicator = 1,
            i, j,
            row, cell,
            parent;
        board.border = 1;
        for (i = 0; i < 3; i += 1) {
            row = document.createElement("tr");
            board.appendChild(row);
            for (j = 0; j < 3; j += 1) {
                cell = document.createElement("td");
                cell.width = cell.height = 50;
                cell.align = cell.valign = 'center';
                cell.indicator = indicator;
                cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                seats.push(cell);
                indicator += indicator;
            }
        }

        // Attach under seat if present, otherwise to body.
        parent = document.getElementById("seat") || document.body;
        parent.appendChild(board);
        startNewBooking();
    };

    /*
     * Add the play function to the (virtual) list of onload events.
     */
    if (typeof window.onload === "function") {
        oldOnLoad = window.onload;
        window.onload = function () {
            oldOnLoad();
            play();
        };
    } else {
        window.onload = play;
    }
}());
