var board = new Array();
var score = 0;
var isfinish = 0;
$(function () {
	NewGame();
});

function NewGame() {
	Init();
	GenerateOneNum();
	GenerateOneNum();
}
function Init() {
	score = 0;
	for (var i = 0; i < 4; i++) {
		board[i] = new Array();
		for (var j = 0; j < 4; j++) {
			board[i][j] = 0;
			var gridCell = $("#grid-cell-" + i + "-" + j);
			gridCell.css("top", GetPosTop(i, j));
			gridCell.css("left", GetPosLeft(i, j));
		}
	}
	UpdateBoardView();
}
function UpdateBoardView() {
	$(".number-cell").remove();
	$("span").html(score);
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			$("#grid-container").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>');
			var theNumberCell = $("#number-cell-" + i + "-" + j);
			if (board[i][j] == 0) {
				theNumberCell.css('width', '0px');
				theNumberCell.css('height', '0px');
				theNumberCell.css('top', GetPosTop(i, j));
				theNumberCell.css('left', GetPosLeft(i, j));
			} else {
				theNumberCell.css('width', '100px');
				theNumberCell.css('hegiht', '100px');
				theNumberCell.css('top', GetPosTop(i, j));
				theNumberCell.css('left', GetPosLeft(i, j));
				theNumberCell.css('background-color', GetNumberBackgroundColor(board[i][j]));
				theNumberCell.css('color', GetNumberColor(board[i][j]));
				theNumberCell.text(board[i][j]);
			}
		}
	}
}
function GenerateOneNum() {
	var randX = parseInt(Math.floor(Math.random() * 4));
	var randY = parseInt(Math.floor(Math.random() * 4));
	while (1) {
		if (board[randX][randY] == 0) {
			break;
		}
		randX = parseInt(Math.floor(Math.random() * 4));
		randY = parseInt(Math.floor(Math.random() * 4));
	}
	var randNum = Math.random() < 0.5 ? 2 : 4;
	board[randX][randY] = randNum;
	ShowNumWithAnimation(randX, randY, randNum);
}

function ShowPopup() {
	isfinish = 1;
	var showWindow = document.getElementById("showwindow");
	var popUp = document.getElementById("modalpopup");
	popUp.style.height = document.documentElement.clientHeight * 0.6 + "px";
	popUp.style.width = document.documentElement.clientWidth * 0.4 + "px";
	popUp.style.top = document.documentElement.clientHeight * 0.2 + "px";
	popUp.style.left = document.documentElement.clientWidth * 0.3 + "px";
	showWindow.style.visibility = "visible";
}
function HidePopup() {
	var showWindow = document.getElementById("showwindow");
	showWindow.style.visibility = "hidden";
	isfinish = 0;
	NewGame();
}