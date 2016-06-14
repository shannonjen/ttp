$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      't'              : $('input[name=q]').val(),
      'type'             : $('input[name=type]').val()
    };
    $.getJSON("http://www.omdbapi.com/?",
    {
      t: 'sharknado'
    },
    function(response) {
      console.log(response);
    }
  );
    // $.ajax({
    //   type: "GET",
    //   url: 'https://api.spotify.com/v1/search',
    //   data: formData,
    //   success: function (response) {
    //     console.log(response.artists.items);
    //     var artists = response.artists.items;
    //     for (var i =0; i<artists.length;i++){
    //       console.log(artists[i].name);
    //     }
    //   }
   // });
  });
});




// $.getJSON("http://www.omdbapi.com/?",
//     {
//       t: "sharknado"
//     },
//     function(response) {
//       console.log(response);
//     }
//   );