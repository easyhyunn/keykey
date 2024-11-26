/*-------------------------------------------------
title       : 메인
Author      : PLAN I
Create date : 2023-01-01
-------------------------------------------------*/
const banner = () => {

    const swiper = new Swiper(
        '.slide-banner .swiper',
        {
            slidesPerView : 1,
            autoplay : true,
            loop : true,
            pagination : {
                el : '.banner-controller-pagination',
            }
        }
    )
}


function virtualKeyboard(wraper) {
    var $keyboardWrapper = $(wraper),
    $key = $keyboardWrapper.find('button'),
    $key_delete = $('.delete-btn'),
    $outputField = $('.search-text'),
    $currentValue = $outputField.val(),
    actionKeys = $('.delete-btn, .close-btn, .confirm-btn');
  
  // handle keystrokes
  function _keystroke(keyCase) {
    $key.not(actionKeys).on('click', function (e) {
      e.preventDefault();
  
      var keyValue = $(this).val();

      $('.check em').text(($currentValue.length + 1));
       
      // grab current value
      var output = $('.search-text').val();
      $outputField.val(output + keyValue);
      getCurrentVal();
      focusOutputField();
    });
  } // keystroke
  
  // delete
  $key_delete.on('click', function (e) {
    e.preventDefault();
    $outputField.val($currentValue.substr(0, $currentValue.length - 1));
    if(($currentValue.length - 1) < 1) {
      $('.check em').text('0');
    } else {
      $('.check em').text(($currentValue.length - 1));
    }
    getCurrentVal();
    focusOutputField();
  });
  
  // grab current value of typed text
  function getCurrentVal() {
    $currentValue = $outputField.val();
  }
  
  // focus for cursor hack
  function focusOutputField() {
    $outputField.focus();
  }
  
  _keystroke('lower'); // init keystrokes
  
}

$(function() {

  const searchInput = $('.search-text');
  const searchWrap = $('.key-wrap');


  $('.tab_btn').on('click', function() {
    searchInput.val('');
    $('.check em').text('0');

    $('.key-tab').removeClass('active');

    if ($(this).parents('.key-tab').hasClass('numeric-key')){
      $('.numeric-key').addClass('active');
    } else if ($(this).parents('.key-tab').hasClass('eng-key')){
      $('.eng-key').addClass('active');
    }
  });

  $(document).mouseup(function (e){
    if(searchWrap.has(e.target).length === 0){
      if(searchWrap.hasClass('on')) {
        searchWrap.removeClass('on');
      }
    }
  });

  searchInput.on('click', function(e) {
    if (searchWrap.hasClass('on') == false){
      searchWrap.addClass('on');
    } else {
      e.preventDefault();
    }
    const element = document.getElementById('recordNum');
    element.scrollIntoView({behavior: "smooth", block: "center"});
  });

  $('.close-btn').on('click', function() {
    searchWrap.removeClass('on');
  });

  banner();
  virtualKeyboard('.keyboard');
    
});