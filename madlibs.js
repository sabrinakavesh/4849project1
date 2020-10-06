// var weatherResults = document.getElementById("weatherResults");

// const url = 'https://api.aerisapi.com/observations/seattle, wa?&format=json&filter=allstations&limit=1&client_id=jDIDu1zjHtCGMP9i8HpM3&client_secret=MExEpEhooYr7UOcHNSmqHgKWXbCL2XKq8STu2SDA';

// fetch(url)
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       showResults(data);
//     })
//     .catch(err => {
//       console.log("There was an error");
//     })


// function showResults(response) {
//   // Work with JSON data here
//   // create array of items
//   var results = response.response;
//   var placename = results.place.name;
//   // var name = place.name;
//   var placestate = results.place.state;
//   var weather = results.ob.weather;
//   var temperature = results.ob.tempF;
//   var precipitation = results.ob.precipIN;

//   //clear results section
//    weatherResults.innerHTML = "";
//   weatherResults.innerHTML += "<span class='place'>" + placename + ", " + placestate + "</span><span class='weather'>" + weather + "</span><span class='temperature'>" + temperature + "&deg" + "</span><span class='precipitation'>" + precipitation + "in" + "</span><br>";
  
//   // weatherResults.innerHTML += "<div class='place'>" + placename + ", " + placestate + "</div>";
//   // weatherResults.innerHTML += "<div class='weather'>" + weather + "</div>";
//   // weatherResults.innerHTML += "<div class='temperature'>" + temperature + "</div>";
//   // weatherResults.innerHTML += "<div class='precipitation'>" + precipitation + "in" + "</div><br>";

//   // weatherResults.innerHTML += "<span class='resultData'>" + placename + ", " + placestate + "</span><span class='resultData'>" + weather + "</span><span class='resultData'>" + temperature + "&deg" + "</span><span class='resultData'>" + precipitation + "in" + "</span><br>";

// }


// alert("Hello World");
/*CSS comment*/
//JS comment

// document.getElementById("adj1").innerHTML = "";
// document.getElementById("adj2").innerHTML = "";
// document.getElementById("noun1").innerHTML = "";
// document.getElementById("noun2").innerHTML = "";
// document.getElementById("plnoun1").innerHTML = "";
// document.getElementById("game1").innerHTML = "";
// document.getElementById("plnoun2").innerHTML = "";
// document.getElementById("ingvrb1").innerHTML = "";
// document.getElementById("ingvrb2").innerHTML = "";
// document.getElementById("plnoun3").innerHTML = "";
// document.getElementById("ingvrb3").innerHTML = "";
// document.getElementById("noun3").innerHTML = "";
// document.getElementById("plant").innerHTML = "";
// document.getElementById("bodyprt").innerHTML = "";
// document.getElementById("place").innerHTML = "";
// document.getElementById("ingvrb4").innerHTML = "";
// document.getElementById("adj3").innerHTML = "";
// document.getElementById("num").innerHTML = "";
// document.getElementById("plnoun4").innerHTML = "";

  document.getElementById("adj1").value = "";
  document.getElementById("adj2").value = "";
  document.getElementById("noun1").value = "";
  document.getElementById("noun2").value = "";
  document.getElementById("plnoun1").value = "";
  document.getElementById("game1").value = "";
  document.getElementById("plnoun2").value = "";
  document.getElementById("ingvrb1").value = "";
  document.getElementById("ingvrb2").value = "";
  document.getElementById("plnoun3").value = "";
  document.getElementById("ingvrb3").value = "";
  document.getElementById("noun3").value = "";
  document.getElementById("plant").value = "";
  document.getElementById("bodyprt").value = "";
  document.getElementById("place").value = "";
  document.getElementById("ingvrb4").value = "";
  document.getElementById("adj3").value = "";
  document.getElementById("num").value = "";
  document.getElementById("plnoun4").value = "";

function assemble(){
  var adj1 = document.getElementById("adj1").value;
  var adj2 = document.getElementById("adj2").value;
  var noun1 = document.getElementById("noun1").value;
  var noun2 = document.getElementById("noun2").value;
  var plnoun1 = document.getElementById("plnoun1").value;
  var game1 = document.getElementById("game1").value;
  var plnoun2 = document.getElementById("plnoun2").value;
  var ingvrb1 = document.getElementById("ingvrb1").value;
  var ingvrb2 = document.getElementById("ingvrb2").value;
  var plnoun3 = document.getElementById("plnoun3").value;
  var ingvrb3 = document.getElementById("ingvrb3").value;
  var noun3 = document.getElementById("noun3").value;
  var plant = document.getElementById("plant").value;
  var bodyprt = document.getElementById("bodyprt").value;
  var place = document.getElementById("place").value;
  var ingvrb4 = document.getElementById("ingvrb4").value;
  var adj3 = document.getElementById("adj3").value;
  var num = document.getElementById("num").value;
  var plnoun4 = document.getElementById("plnoun4").value;
  var title = document.getElementById("title");
  var story = document.getElementById("storyResult");
  var error = document.getElementById("error");

    error.innerHTML = "";
    title.innerHTML = "Vacation Story";    

    story.innerHTML = `A vacation is when you take a trip to some ${adj1} place with your ${adj2} family. Usually you go to some place that is near a/an ${noun1} or up on a/an ${noun2}. A good vacation place is one where you can ride ${plnoun1} or play ${game1} or go hunting for ${plnoun2}. I like to spend my time ${ingvrb1} or ${ingvrb2}. When parents go on a vacation, they spend their time eating three ${plnoun3} a day, and fathers play golf, and mothers sit around ${ingvrb3}. Last summer, my little brother fell in a/an ${noun3} and got poison ${plant} all over his ${bodyprt}. My family is going to go to (the) ${place}, and I will practice ${ingvrb4}. Parents need vacations more than kids because parents are always very ${adj3} and because they have to work ${num} hours every day all year making enough ${plnoun4} to pay for the vacation.`;

  //reset input fields after story is generated
  document.getElementById("adj1").value = "";
  document.getElementById("adj2").value = "";
  document.getElementById("noun1").value = "";
  document.getElementById("noun2").value = "";
  document.getElementById("plnoun1").value = "";
  document.getElementById("game1").value = "";
  document.getElementById("plnoun2").value = "";
  document.getElementById("ingvrb1").value = "";
  document.getElementById("ingvrb2").value = "";
  document.getElementById("plnoun3").value = "";
  document.getElementById("ingvrb3").value = "";
  document.getElementById("noun3").value = "";
  document.getElementById("plant").value = "";
  document.getElementById("bodyprt").value = "";
  document.getElementById("place").value = "";
  document.getElementById("ingvrb4").value = "";
  document.getElementById("adj3").value = "";
  document.getElementById("num").value = "";
  document.getElementById("plnoun4").value = "";
}
 