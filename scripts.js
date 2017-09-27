//Keep track of the amount of squares on the page
var squareCount = 0;
//When the page is loaded...
document.addEventListener("DOMContentLoaded", function() {
    //Create a button element
    var btn = document.createElement("button");
    //Add some text to this button...
    //Now looks like: <button>Click me!</button>
    btn.innerHTML = "Click me!";

    //Set up what happens when our button is clicked
    btn.addEventListener("click", function() {
        //Create a new div element
        var div = document.createElement("div");
        //Give it a class name
        div.className = "box";
        //Give it an id that is equal to the number of squares
        div.id = squareCount;

        //Set up what happens when our div is hovered over
        div.addEventListener("mouseover", function() {
            div.innerText = div.id;
        });

        //Set up what happens when our div is no longer hovered 
        div.addEventListener("mouseout", function() {
            div.innerText = "";
        })

        //Set up what happens when our div is clicked
        div.addEventListener("click", function() {
            div.style.backgroundColor = getRandomColor();
        })

        //Set up what happens when our div is double-clicked
        div.addEventListener("dblclick", function() {
            var toRemove = div.id % 2 === 0 ? div.nextSibling : div.previousSibling;
            if(toRemove !== null) {
                toRemove.remove();
            } else if(toRemove !== null && toRemove !== "BUTTON") {
                toRemove.remove();
            } else {
                alert("There is no element to remove!");
            }
        })

        //Put our new div on the page
        document.body.appendChild(div);
        //Increment squareCount
        squareCount++;
    });

    //Add this button to the body of my page
    document.body.appendChild(btn);
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'; 
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }