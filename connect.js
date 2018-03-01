// Joyce Wu
// Softdev2 pd7
// K07 -- Connect the Dots
// 2018-02-28

//retrieve elements from DOM
var svg = document.getElementById("vimage");
var btn = document.getElementById("clear");
var prevX, prevY;

//clears canvas
var clearFxn = function(e){
  while(svg.lastChild){ //checks to see if there are any drawings remaining
    svg.removeChild(svg.lastChild); //remains last drawing
  }

  prevX = null; //erases previous coordinates
  prevY = null;
}

//draws circle on x, y coordinate
var drawCircle = function(x, y){
  if(prevX){
    var l = document.createElementNS( //creates line element
      "http://www.w3.org/2000/svg",
      "line"
    );
    l.setAttribute("x1", prevX);
    l.setAttribute("y1", prevY);
    l.setAttribute("x2", x);
    l.setAttribute("y2", y);
    l.setAttribute("stroke", "black");
    svg.appendChild(l);
  }

  var c = document.createElementNS( //creates circle element
    "http://www.w3.org/2000/svg",
    "circle"
  );
  //sets attributes to circle
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", "10");
  c.setAttribute("fill", "red");
  svg.appendChild(c); //adds circle to canvas

  prevX = x;
  prevY = y;
}

var drawFxn = function(e){
  if(e.toElement == this){
    drawCircle(e.offsetX, e.offsetY);
    console.log("clicked"); //debugging
  }
}

//add event listeners
clear.addEventListener("click", clearFxn);
svg.addEventListener("click", drawFxn);
