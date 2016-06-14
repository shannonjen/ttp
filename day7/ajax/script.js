$(document).ready(function(){
  $("#search").on("submit",function(e){
    e.preventDefault();
    var formData = {
      'q'              : $('input[name=q]').val(),
      'type'             : $('input[name=type]').val()
    };
    $.ajax({
      type: "GET",
      url: 'https://api.spotify.com/v1/search',
      data: formData,
      success: function (response) {
        console.log(response.artists.items);
        var artists = response.artists.items;
        for (var i =0; i<artists.length;i++){
          console.log(artists[i].name);
        }
      }
    });
  });
});





// var items = response.artists.items;
        // for(var i= 0; i<items.length; i++){
        //   var item = items[i];
        //   $.each(item,function(key,value){
        //     console.log("key: "+key);
        //     console.log("value: "+value);
        //   })
        //}

        // $.each(response,function(key,value){
        //   console.log("key: "+key);
        //   $.each(value,function(key2,val2){
        //     console.log("key2: "+key2);
        //     console.log("val2: "+val2);

        //   })

          
        // });
        
        // var artistArray= response.artists.items; 
        // for(var i = 0 ; i<artistArray.length; i++){
        //   for(var j = 0; j<artistArray[i].images.length; j++){
        //     console.log(artistArray[i].images[j].url);
        //   }
        // }