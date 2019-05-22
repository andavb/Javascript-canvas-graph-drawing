var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var izbira = "sin";

//https://d3js.org/
var canvas = d3.select("canvas").call(d3.zoom().scaleExtent([-1, 30]).on("zoom", povecaj)),
    context = canvas.node().getContext("2d"),
    width = canvas.property("width"),
    height = canvas.property("height");

$(document).ready(function(){
  $("select").change(function(){
    context.clearRect(0, 0, width, height);
    if(this.value == "sin"){
      izbira = "sin";
    }
    else if (this.value == "cos") {
      izbira = "cos";
    }
    else if (this.value == "tan") {
      izbira = "tan";
    }
    else if (this.value == "atan") {
      izbira = "atan";
    }
    else if (this.value == "acosh") {
      izbira = "acosh";
    }
    narisiX();
  });
});

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function naris(x){
  ctx.beginPath();
  ctx.arc(Math.abs(x), c.height/2-(Math.sin(Math.abs(x)*0.018)*55.25), 1, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, c.height/2-(Math.sin(x*0.018)*55.25), 1, 0, 2 * Math.PI);
  ctx.stroke();
}

function narisiSin() {

  for (var i = 0; i > -5000; i--) {
    //setTimeout(naris, 10, i);
    ctx.beginPath();
    ctx.arc(Math.abs(i), c.height/2-(Math.sin(Math.abs(i)*0.018)*55.25), 1, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(i, c.height/2-(Math.sin(i*0.018)*55.25), 1, 0, 2 * Math.PI);
    ctx.stroke();
  }

}

function narisiCos() {
  for (var i = -10000; i < 10000; i++) {
    ctx.beginPath();
    ctx.arc(i, c.height/2-(Math.cos(i*0.018)*55.25), 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}

function narisiTan() {
  //ctx.beginPath();
  for (var i = -10000; i < 10000; i++) {
    ctx.beginPath();
    ctx.arc(i, c.height/2-(Math.tan(i*0.018)*55.25), 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
  //ctx.stroke();
}

function narisiAtan() {
  for (var i = -10000; i < 10000; i++) {
    ctx.beginPath();
    ctx.arc(i, c.height/2-(Math.atan(i*0.018)*55.25), 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}

function narisiAcosh() {
  for (var i = -10000; i < 10000; i++) {
    ctx.beginPath();
    ctx.arc(i, c.height/2-(Math.acosh(i*0.018)*55.25), 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}

function povecaj() {
  var t = d3.event.transform;
  context.save();
  context.clearRect(0, 0, width, height);
  context.translate(t.x, t.y);
  context.scale(t.k, t.k);
  narisiX();
  context.restore();
}

function narisiX(){
  ctx.beginPath();
  ctx.moveTo(0, c.height/2);
  ctx.lineTo(5000, c.height/2);
  ctx.lineTo(-5000, c.height/2);
  ctx.font = "15px Arial";
  ctx.textAlign = 'center';

  for (var i = -5000; i < 5000; i++) {
    ctx.moveTo(i*55.25, (c.height/2)-5);
    ctx.lineTo(i*55.25, (c.height/2)+5);
    ctx.strokeText(i, i*55.25 ,(c.height/2)+20);
  }
  ctx.stroke();

  narisiY();
  if(izbira == "sin"){
    narisiSin();
  }
  else if (izbira == "cos") {
    narisiCos();
  }
  else if (izbira == "tan") {
    narisiTan();
  }
  else if (izbira == "atan") {
    narisiAtan();
  }
  else if (izbira == "acosh") {
    narisiAcosh();
  }

}

function narisiY() {

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, 5000);
  ctx.lineTo(0, -5000);
  ctx.font = "15px Arial";
  ctx.textAlign = 'center';
  var sestevek = (c.height/2);

  for (var i = 1; i < 5000; i++) {
    sestevek += 55.25;
    ctx.moveTo(-5, sestevek);
    ctx.lineTo(5, sestevek);
    ctx.strokeText("-" + i, 20 ,sestevek+5);
  }
  sestevek = (c.height/2);


  for (var i = 1; i < 5000; i++) {
    sestevek += -55.25;
    ctx.moveTo(-5, sestevek);
    ctx.lineTo(5, sestevek);
    ctx.strokeText(i, 20 ,sestevek+5);
  }
  ctx.stroke();

}

narisiX();
