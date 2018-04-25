$(document).keydown(function (event) {
	if (isfinish) return;
	var temp = event.keyCode;
	if (temp == 37 || temp == 65 || temp == 100) {
		if (MoveLeft()) {
			GenerateOneNum();
			IsGameOver();
		}
	}
	else if (temp == 38 || temp == 87 || temp == 104) {
		if (MoveUp()) {
			GenerateOneNum();
			IsGameOver();
		}
	}
	else if (temp == 39 || temp == 68 || temp == 102) {
		if (MoveRight()) {
			GenerateOneNum();
			IsGameOver();
		}
	}
	else if (temp == 40 || temp == 83 || temp == 98) {
		if (MoveDown()) {
			GenerateOneNum();
			IsGameOver();
		}
	}
});
function MoveLeft() {
	if (!CanMoveLeft(board)) return false;
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (board[i][j]) {
				for (var k = 0; k < j; k++) {
					if (board[i][k] == 0 && IsZeroRow(i, k, j)) {
						ShowMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						break;
					}
					else if (board[i][k] == board[i][j] && IsZeroRow(i, k, j)) {
						ShowMoveAnimation(i, j, i, k);
						score += board[i][j];
						board[i][k] *= 2;
						board[i][j] = 0;
						break;
					}
				}
			}
		}
	}
	setTimeout("UpdateBoardView()", 200);
	return true;
}
function MoveRight() {
	if (!CanMoveRight(board)) return false;
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j >= 0; j--) {
			if (board[i][j]) {
				for (var k = 3; k > j; k--) {
					if (board[i][k] == 0 && IsZeroRow(i, j, k)) {
						ShowMoveAnimation(i, j, i, k);
						board[i][k] = board[i][j];
						board[i][j] = 0;
						break;
					}
					else if (board[i][k] == board[i][j] && IsZeroRow(i, k, j)) {
						ShowMoveAnimation(i, j, i, k);
						score += board[i][j];
						board[i][k] *= 2;
						board[i][j] = 0;
						break;
					}
				}
			}
		}
	}
	setTimeout("UpdateBoardView()", 200);
	return true;
}
function MoveUp() {
	if (!CanMoveUp(board)) return false;
	for (var j = 0; j < 4; j++) {
		for (var i = 1; i < 4; i++) {
			if (board[i][j]) {
				for (var k = 0; k < i; k++) {
					if (board[k][j] == 0 && IsZeroCol(j, k, i)) {
						ShowMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						break;
					}
					else if (board[k][j] == board[i][j] && IsZeroCol(j, k, i)) {
						ShowMoveAnimation(i, j, k, j);
						score += board[i][j];
						board[k][j] *= 2;
						board[i][j] = 0;
						break;
					}
				}
			}
		}
	}
	setTimeout("UpdateBoardView()", 200);
	return true;
}
function MoveDown() {
	if (!CanMoveDown(board)) return false;
	for (var j = 0; j < 4; j++) {
		for (var i = 2; i >= 0; i--) {
			if (board[i][j]) {
				for (var k = 3; k > i; k--) {
					if (board[k][j] == 0 && IsZeroCol(j, k, i)) {
						ShowMoveAnimation(i, j, k, j);
						board[k][j] = board[i][j];
						board[i][j] = 0;
						break;
					}
					else if (board[k][j] == board[i][j] && IsZeroCol(j, k, i)) {
						ShowMoveAnimation(i, j, k, j);
						score += board[i][j];
						board[k][j] *= 2;
						board[i][j] = 0;
						break;
					}
				}
			}
		}
	}
	setTimeout("UpdateBoardView()", 200);
	return true;
}
function CanMoveLeft(board) {
	for (var i = 0; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			if (board[i][j] && (board[i][j - 1] == 0 || board[i][j - 1] == board[i][j])) return true;
		}
	}
	return false;
}
function CanMoveRight(board) {
	for (var i = 0; i < 4; i++) {
		for (var j = 2; j >= 0; j--) {
			if (board[i][j] && (board[i][j + 1] == 0 || board[i][j + 1] == board[i][j])) return true;
		}
	}
	return false;
}
function CanMoveUp(board) {
	for (var j = 0; j < 4; j++) {
		for (var i = 1; i < 4; i++) {
			if (board[i][j] && (board[i - 1][j] == 0 || board[i - 1][j] == board[i][j])) return true;
		}
	}
	return false;
}
function CanMoveDown(board) {
	for (var j = 0; j < 4; j++) {
		for (var i = 2; i >= 0; i--) {
			if (board[i][j] && (board[i + 1][j] == 0 || board[i + 1][j] == board[i][j])) return true;
		}
	}
	return false;
}
function IsZeroRow(row, col1, col2) {
	for (var i = col1 + 1; i < col2; i++) {
		if (board[row][i]) return false;
	}
	return true;
}
function IsZeroCol(col, row1, row2) {
	for (var i = row1 + 1; i < row2; i++) {
		if (board[i][col]) return false;
	}
	return true;
}
function IsGameOver() {
	var sign = 0;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (board[i][j] == 0) { sign = 1; break; }
		}
		if (sign) break;
	}
	if (sign == 0) {
		for (var i = 1; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				if (board[i][j] == board[i - 1][j]) {
					sign = 1; break;
				}
			}
			if (sign) break;
		}
	}
	if (sign == 0) {
		for (var j = 1; j < 4; j++) {
			for (var i = 0; i < 4; i++) {
				if (board[i][j] == board[i][j - 1]) {
					sign = 1; break;
				}
			}
			if (sign) break;
		}
	}
	if (sign == 0) {
		GameOver();
	}
}
function GameOver() {
	var string = "Your Score:";
	$("a1").html(string);
	string = score;
	$("a2").html(string);
	ShowPopup();
}