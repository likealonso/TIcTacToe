//1
var board;
var turn;
var winner;

//2
var $squares = $('td')
var $msg = $('#msg')

//5
$('table').on('click', 'td', function(){
  var idx = parseInt(this.id.charAt(1));
  if (board[idx] || winner) return;
  board[idx] = turn;
  turn = turn === 'X' ? 'O' : 'X';
  winner = getWinner();
  render();
})

//8
$('#reset').on('click', function(){
  init();
  render();
});

//3
function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 'X';
  winner = null;
}

//4
function render() {
  $squares.each(function(idx) {
  $(this).html(board[idx]);
  }
)
//6
if (winner) {
  if (winner === 'T') {
    $msg.html('Crap ... tie game ...');
  } else {
    $msg.html(`Player ${winner} has won!`);
  }
}
  else {
  $msg.html(`It is Player ${turn}'s turn`);
}
}

//7
function getWinner() {
  if (board[0]===board[1] && board[0]===board[2]){
    return board[0];
  } else if (board[3]===board[4] && board[3]===board[5]){
    return board[3];
  } else if (board[6]===board[7] && board[6]===board[8]){
    return board[6];
  } else if (board[0]===board[3] && board[0]===board[6]){
    return board[0];
  } else if (board[1]===board[4] && board[1]===board[7]){
    return board[1];
  } else if (board[2]===board[5] && board[2]===board[8]){
    return board[2];
  } else if (board[0]===board[4] && board[0]===board[8]){
    return board[0];
  } else if (board[2]===board[4] && board[2]===board[6]){
    return board[0];
  } else {
    return board.includes(null) ? null : 'T';
  }
}

init()
render()