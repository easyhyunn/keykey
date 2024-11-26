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

const keyNumCheck = () => {

    $('.search-text').change(function(){
        
        console.log($('.search-text').val().length);
    });
}

function virtualKeyboard(wraper) {
    var $keyboardWrapper = $(wraper),
    $key = $keyboardWrapper.find("button"),
    $key_delete = $(".delete-btn"),
    $outputField = $(".search-text"),
    $currentValue = $outputField.val(),
    actionKeys = $(".delete-btn");
  
  // handle keystrokes
  function _keystroke(keyCase) {
    $key.not(actionKeys).on("click", function (e) {
      e.preventDefault();
  
      // handle case
      if (keyCase == "upper") {
        var keyValue = $(this).val().toUpperCase();
      } else {
        var keyValue = $(this).val().toLowerCase();
      }
  
      // grab current value
      var output = $(".search-text").val();
      $outputField.val(output + keyValue);
      getCurrentVal();
      focusOutputField();
    });
  } // keystroke
  
  // delete
  $key_delete.on("click", function (e) {
    e.preventDefault();
    $outputField.val($currentValue.substr(0, $currentValue.length - 1));
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
  
  _keystroke("lower"); // init keystrokes
}

function onlyAlphaNum(input) {
    const regex = /^[A-Za-z0-9]*$/;
    if (!regex.test(input.value)) {
        input.value = input.value.replace(/[^A-Za-z0-9]/g, '');
    }
}

$(function() {
    banner();
    virtualKeyboard('.keyboard-numeric');
    virtualKeyboard('.keyboard-eng');
});