let cTool = "pencil";
// let canvasBoard = document.querySelector("canvas");
let canvasBoard = document.getElementById("canvas");
// canvasBoard.height = window.innerHeight;
canvasBoard.height = 626;
canvasBoard.width = window.innerWidth - 20;
// canvasBoard.background-color == "black";

let tool = canvasBoard.getContext("2d");
tool.fillStyle = "white";
// display = none;
tool.fillRect(0, 0, canvasBoard.width, canvasBoard.height);
let body = document.querySelector("body");
let drawcolor = "black";
// tool.strokeStyle = "red";