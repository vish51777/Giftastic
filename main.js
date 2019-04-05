// make gifs appear from button click -> event listener function on the click of button 
    // play/stop gifs on click -> event listener on the image to toggle


//Array of initial games
var gamesList = ["Zelda", "Metroid Prime", "Super Smash Bros", "Donkey Kong", "Splatoon", "Mario", "Animal Crossing", "Devil May Cry", "Sekiro: Shadows Die Twice", "Apex", "Halo"];

//Creating buttons for games
for (let title of gamesList) {
    let button = document.createElement("button");
    button.innerHTML = title;
    let buttonsElement = document.getElementById("gameButtons");
    buttonsElement.appendChild(button);
    $(button).on("click", function(){
        $("#gifs").empty();
        let xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+title+"&api_key=hgvJqi3pPkjLQG1C7wjFGSxMf1YmPFRN&limit=10");
        xhr.done(function(response) {
            console.log("success got data", response);
            console.log(response.data[0].images.fixed_height_small.url)
            // need to loop through response.data.length (10) and create all the cards to be attached to the div with class gifs
            for (i =0; i< response.data.length; i++) {
                // displaying gifs from response data
                let cardDiv = $("<div class='card-div'>")
                // attach div cards to div with class gifs
                $("#gifs").append(cardDiv);
                let image= $("<img src=''>");
                image.attr('src', response.data[i].images.fixed_height_small_still.url);
                image.attr('animate', response.data[i].images.fixed_height_small.url);
                image.attr('still', response.data[i].images.fixed_height_small_still.url);
                image.attr('state', "still");
                $(cardDiv).append(image);
                $(cardDiv).append("<p>"+response.data[i].rating+"</p>");
                $(image).on("click", function(){
                    if($(this).attr('state')==="still"){
                        $(this).attr('state', 'animate')
                        $(this).attr('src', $(this).attr("animate"));
                    }
                    else{
                        $(this).attr('state', "still")
                        $(this).attr('src', $(this).attr("still"));
                    }
                })
            }
        });
        console.log(title);
    })
}

//User button creation
$("#submitButton").on("click", function(){
    let title = document.getElementById("userText").value;
    if (title){
        let button = document.createElement("button");
        button.innerHTML = title;
        let buttonsElement = document.getElementById("gameButtons");
        buttonsElement.appendChild(button);
        $(button).on("click", function(){
            $("#gifs").empty();
            let xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+title+"&api_key=hgvJqi3pPkjLQG1C7wjFGSxMf1YmPFRN&limit=10");
            xhr.done(function(response) {
                console.log("success got data", response);
                console.log(response.data[0].images.fixed_height_small.url)
                // need to loop through response.data.length (10) and create all the cards to be attached to the div with class gifs
                for (i =0; i< response.data.length; i++) {
                    // displaying gifs from response data
                    let cardDiv = $("<div class='card-div'>")
                    // attach div cards to div with class gifs
                    $("#gifs").append(cardDiv);
                    let image= $("<img src=''>");
                    image.attr('src', response.data[i].images.fixed_height_small_still.url);
                    image.attr('animate', response.data[i].images.fixed_height_small.url);
                    image.attr('still', response.data[i].images.fixed_height_small_still.url);
                    image.attr('state', "still");
                    $(cardDiv).append(image);
                    $(cardDiv).append("<p>"+response.data[i].rating+"</p>");
                    $(image).on("click", function(){
                        if($(this).attr('state')==="still"){
                            $(this).attr('state', 'animate')
                            $(this).attr('src', $(this).attr("animate"));
                        }
                        else{
                            $(this).attr('state', "still")
                            $(this).attr('src', $(this).attr("still"));
                        }
                    })
                }
            });
        })
    }
})
