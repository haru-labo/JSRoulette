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
  //スタートボタンを非活性
  $('#btnStart').prop('disabled', true);
  idRulette = setInterval(roulette, 100);
}

function stop() {
  //スタートボタンを活性
  $('#btnStart').prop('disabled', false);
  clearInterval(idRulette);
  //選択したボックスをselectedへ
  $selectedBox = $('.selecting');
  $selectedBox.removeClass('selecting');
  $selectedBox.addClass('selected');
  //選択できるボックスがなければスタートボタンを非活性
  if($('.active').length === 0) {
    $('#btnStart').prop('disabled', true);
  }
}

function reset() {
  //ルーレット動作中は停止
  if(idRulette !== undefined) {
    clearInterval(idRulette);
  }
  //スタートボタンを活性
  $('#btnStart').prop('disabled', false);
  //全てのクラスをactiveへ
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
  //選択済みのものがあればInactiveにする
  if($selectedBox.length) {
    $selectedBox.removeClass('selected');
    $selectedBox.addClass('inactive');
  }
  
  if($activeBox.length < 1) {
    $targetBox.removeClass('active');
    $targetBox.addClass('selecting');
  } else {
    $selectingBox.removeClass('selecting');
    $selectingBox.addClass('active');
    $targetBox.removeClass('active');
    $targetBox.addClass('selecting');
  }
}

//////////開始時処理//////////
$(function() {
  addBox();
  $('#btnStart').click(start);
  $('#btnStop').click(stop);
  $('#btnReset').click(reset);
});