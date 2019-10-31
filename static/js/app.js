// from data.js
var sightings = data;

// reference tbody
var tbody = d3.select("tbody");


function buildTable(data) {
    //clear table
    tbody.html("");

    //append a row for each row of data to show
    data.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
}



// //function is triggered when the button is clicked
// function handleClick() {


// }   

buildTable(sightings);

