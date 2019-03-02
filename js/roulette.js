let numOfBox = 16;
let boxNum = 0;
let idRulette;
//ボックスの状態
let $activeBox;
let $selectingBox;
let $selectedBox;
let $inactiveBox;

function addBox() {
  for(let i = 0; i < numOfBox; i++) {
    boxNum++;
    $('#outflame').append('<div class="active"></div>');
    $('#outflame :last-child').text(boxNum);
  }
}


//////////各ボタン処理//////////
function start() {
  idRulette = setInterval(roulette, 100);
}

function stop() {
  clearInterval(idRulette);
  $selectedBox = $('.selecting');
  $selectedBox.removeClass('selecting');
  $selectedBox.addClass('selected');
}

function reset() {
  if(idRulette !== undefined) {
    clearInterval(idRulette);
  }
  let $resetTarget = $('.inactive, .selecting, .selected');
  $resetTarget.removeClass();
  $resetTarget.addClass('active');
}

//////////ルーレット処理//////////
function roulette() {
  $activeBox = $('.active');
  $selectingBox = $('.selecting');
  $selectedBox = $('.selected');
  let $activeBoxNum = $activeBox.length;
  let selectingNum = Math.floor(Math.random() * $activeBoxNum);
  let $targetBox = $activeBox.eq(selectingNum);
  if ($selectedBox.length) {
    $selectedBox.removeClass('selected');
    $selectedBox.addClass('inactive');
  }
  $selectingBox.removeClass('selecting');
  $selectingBox.addClass('active');
  $targetBox.removeClass('active');
  $targetBox.addClass('selecting');
}



$(function() {
  addBox();
  $('#btnStart').click(start);
  $('#btnStop').click(stop);
  $('#btnReset').click(reset);
});