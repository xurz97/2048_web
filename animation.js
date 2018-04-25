function ShowNumWithAnimation(x, y, num) {
	var numberCell = $("#number-cell-" + x + "-" + y);
	numberCell.css("background-color", GetNumberBackgroundColor(num));
	numberCell.css("color", GetNumberColor(num));
	numberCell.text(num);
	numberCell.animate({
		width: "100px",
		height: "100px",
		top: GetPosTop(x, y),
		left: GetPosLeft(x, y)
	}, 50)
}
function ShowMoveAnimation(fromX, fromY, toX, toY) {
	var numberCell = $("#number-cell-" + fromX + "-" + fromY);
	numberCell.animate({
		top: GetPosTop(toX, toY),
		left: GetPosLeft(toX, toY)
	}, 200)
}