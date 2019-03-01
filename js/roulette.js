let numOfBox = 16;
let boxNum = 0;

function addBlock() {
  for(let i = 0; i < numOfBox; i++) {
    boxNum++;
    $('#outflame').append('<div></div>');
    $('#outflame :last-child').text(boxNum);
  }
}

function start() {

}

function stop() {

}

function reset() {

}

$(function() {
  addBlock();
  $('#btnStart').click(start);
  $('#btnStop').click(stop);
  $('#btnReset').click(reset);
});