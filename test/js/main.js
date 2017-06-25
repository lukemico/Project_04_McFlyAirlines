console.log('test');


$("div.box1").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( "div.box1 img.selectedImage" ).attr('src', xImage); // show src of xImage when div.box1 is clicked to test later in function
    $( "div.box1 img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( "div.box1 img.selectedImage" ).attr('src', oImage);
    $( "div.box1 img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo(); /// run function to test winning combinations
});
You are repeating this pattern for every single cell on your grid, it means you are repeating your code a lot. Something important to remember is that elements can have multiple classes, instead of:
    <div class="row1">
      <div class="box1">
          <img class="selectedImage" src="#1" style="display: none">
      </div>
      <div class="box2">
        <img class="selectedImage" src="#2" style="display: none">
      </div>
      <div class="box3">
        <img class="selectedImage" src="#3" style="display: none">
      </div>
I would suggest this:
    <div class="row row1">
      <div class="box box1">
And then this:
$("div").on('click', function (event){
Now you have chained the click to any cell. From there, you just need to work with the this keyword, and you get:
$(".box").on('click', function (event){
  if (currentPlayer === xPlay) {
    $( this ).find( "img.selectedImage" ).attr('src', xImage); // show src of xImage whenthis l.find(  is clicked to test )ater in function
    $( this ).find( "img.selectedImage" ).show();
    currentPlayer = oPlay;
    $( "button#x-player" ).removeClass("active");
    $( "button#o-player" ).addClass("active");
    $( this ).off( event );
  } else if (currentPlayer === oPlay) {
    $( this ).find( "img.selectedImage" ).attr('src', oImage);
    $( this ).find( "img.selectedImage" ).show();
    currentPlayer = xPlay;
    $( "button#o-player" ).removeClass("active");
    $( "button#x-player" ).addClass("active");
    $( this ).off( event );
  }
  wincombo(); /// run function to test winning combinations
});
With that, you can delete every other click handler. This will do all of it.
Shared classes also mean things like:
.box1, .box2, .box3, .box4, .box5, .box6, .box7, .box8, .box9
become box.
