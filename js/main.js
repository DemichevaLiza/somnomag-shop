$(document).ready(function() {
  $('.about').hover(function() {
    $('.shapemain').toggleClass('shapemain-off');
    $('.shape4').toggleClass('shape4-on');
  });
});

$(function() {
  $('.shop').hover(function() {
    $('.shapemain').toggleClass('shapemain-off');
    $('.shape1').toggleClass('shape1-on');
  });
});

$(function() {
  $('.event').hover(function() {
    $('.shapemain').toggleClass('shapemain-off');
    $('.shape2').toggleClass('shape2-on');
  });
});

$(function() {
  $('.contacts').hover(function() {
    $('.shapemain').toggleClass('shapemain-off');
    $('.shape3').toggleClass('shape3-on');
  });
});

$(function() {
  $('.history').click(function() {
    $('.shape4a').css('display', 'none');
    $('.texthistory').css('display', 'block');
    $('.vectorhistory').css('display', 'block');
    $('.dreamspoint').css('display', 'none');
  });
});

$(function() {
  $('.dreams').click(function() {
    $('.shape4a').css('display', 'none');
    $('.texthistory').css('display', 'none');
    $('.vectorhistory').css('display', 'none');
    $('.dreamspoint').css('display', 'block');
  });
});

$(function() {
  $('.slide1').click(function() {
    $('.points').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.dreamspoint').css('display', 'none');
    $('.dream1').css('display', 'block');
    $('.info').css('display', 'block');
    $('.arrow').css('display', 'block');
  });
});

$(function() {
  $('.info').click(function() {
    $('.blockinfo1').fadeIn();
    $('.close').css('display', 'block');
  });
});

$(function() {
  $('.close').click(function() {
    $('.blockinfo1').fadeOut();
    $('.close').css('display', 'none');
  });
});

$(function() {
  $('.arrow').click(function() {
    $('.points').css('display', 'flex');
    $('.containermain').css('display', 'grid');
    $('.dreamspoint').css('display', 'block');
    $('.dream1').css('display', 'none');
    $('.dream2').css('display', 'none');
    $('.dream3').css('display', 'none');
    $('.dream4').css('display', 'none');
    $('.dream5').css('display', 'none');
    $('.info').css('display', 'none');
    $('.info2').css('display', 'none');
    $('.info3').css('display', 'none');
    $('.info4').css('display', 'none');
    $('.info5').css('display', 'none');
    $('.blockinfo1').css('display', 'none');
    $('.blockinfo2').css('display', 'none');
    $('.blockinfo3').css('display', 'none');
    $('.blockinfo4').css('display', 'none');
    $('.blockinfo5').css('display', 'none');
    $('.close').css('display', 'none');
    $('.close2').css('display', 'none');
    $('.close3').css('display', 'none');
    $('.close4').css('display', 'none');
    $('.close5').css('display', 'none');
    $('.arrow').css('display', 'none');
    $('.productinfo1').css('display', 'none');
    $('.points1').css('display', 'flex');
  });
});


$(function() {
  $('.slide2').click(function() {
    $('.points').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.dreamspoint').css('display', 'none');
    $('.dream2').css('display', 'block');
    $('.info2').css('display', 'block');
    $('.arrow').css('display', 'block');
  });
});

$(function() {
  $('.info2').click(function() {
    $('.blockinfo2').fadeIn();
    $('.close2').css('display', 'block');
  });
});

$(function() {
  $('.close2').click(function() {
    $('.blockinfo2').fadeOut();
    $('.close2').css('display', 'none');
  });
});

$(function() {
  $('.info3').click(function() {
    $('.blockinfo3').fadeIn();
    $('.close3').css('display', 'block');
  });
});

$(function() {
  $('.close3').click(function() {
    $('.blockinfo3').fadeOut();
    $('.close3').css('display', 'none');
  });
});

$(function() {
  $('.info4').click(function() {
    $('.blockinfo4').fadeIn();
    $('.close4').css('display', 'block');
  });
});

$(function() {
  $('.close4').click(function() {
    $('.blockinfo4').fadeOut();
    $('.close4').css('display', 'none');
  });
});

$(function() {
  $('.info5').click(function() {
    $('.blockinfo5').fadeIn();
    $('.close5').css('display', 'block');
  });
});

$(function() {
  $('.close5').click(function() {
    $('.blockinfo5').fadeOut();
    $('.close5').css('display', 'none');
  });
});

$(function() {
  $('.slide3').click(function() {
    $('.points').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.dreamspoint').css('display', 'none');
    $('.dream3').css('display', 'block');
    $('.info3').css('display', 'block');
    $('.arrow').css('display', 'block');
  });
});

$(function() {
  $('.slide4').click(function() {
    $('.points').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.dreamspoint').css('display', 'none');
    $('.dream4').css('display', 'block');
    $('.info4').css('display', 'block');
    $('.arrow').css('display', 'block');
  });
});

$(function() {
  $('.slide5').click(function() {
    $('.points').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.dreamspoint').css('display', 'none');
    $('.dream5').css('display', 'block');
    $('.info5').css('display', 'block');
    $('.arrow').css('display', 'block');
  });
});

$(function() {
  $('.fordream').click(function() {
    $('.shape1a').css('display', 'none');
    $('.dreamsproducts').css('display', 'grid');
    $('.vector').css('display', 'block');
    $('.vector4').css('display', 'none');
    $('.souvenirproducts').css('display', 'none');
    $('.texthistory1').css('display', 'none');
    $('.arrowdown').css('display', 'none');
    $('.arrowdownwhite').css('display', 'none');
    $('.book1').css('display', 'none');
    $('.winx').css('display', 'none');
  });
  $('.souvenir').click(function() {
    $('.shape1a').css('display', 'none');
    $('.souvenirproducts').css('display', 'grid');
    $('.vector').css('display', 'none');
    $('.vector4').css('display', 'block');
    $('.dreamsproducts').css('display', 'none');
    $('.texthistory1').css('display', 'none');
    $('.arrowdown').css('display', 'none');
    $('.arrowdownwhite').css('display', 'none');
    $('.book1').css('display', 'none');
    $('.winx').css('display', 'none');
  });
  $('.books').click(function() {
    $('.shape1a').css('display', 'none');
    $('.souvenirproducts').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.vector4').css('display', 'none');
    $('.dreamsproducts').css('display', 'none');
    $('.texthistory1').css('display', 'block');
    $('.arrowdown').css('display', 'block');
    $('.arrowdownwhite').css('display', 'none');
    $('.book1').css('display', 'none');
    $('.winx').css('display', 'none');
  });
});


$(function() {
  $('.dreamproduct1').hover(function() {
    $('.dreamproduct1').toggleClass('dreamproduct');
  });
  $('.dreamproduct2').hover(function() {
    $('.dreamproduct2').toggleClass('dreamproduct');
  });
  $('.dreamproduct3').hover(function() {
    $('.dreamproduct3').toggleClass('dreamproduct');
  });
  $('.dreamproduct4').hover(function() {
    $('.dreamproduct4').toggleClass('dreamproduct');
  });
  $('.dreamproduct5').hover(function() {
    $('.dreamproduct5').toggleClass('dreamproduct');
  });
  $('.dreamproduct6').hover(function() {
    $('.dreamproduct6').toggleClass('dreamproduct');
  });
  $('.dreamproduct7').hover(function() {
    $('.dreamproduct7').toggleClass('dreamproduct');
  });
  $('.souvenirproduct1').hover(function() {
    $('.souvenirproduct1').toggleClass('souvenirproduct');
  });
  $('.souvenirproduct2').hover(function() {
    $('.souvenirproduct2').toggleClass('souvenirproduct');
  });
  $('.souvenirproduct3').hover(function() {
    $('.souvenirproduct3').toggleClass('souvenirproduct');
  });
});


$(function() {
  $('.dreamproduct1').click(function() {
    $('.dreamsproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.productinfo1').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.dreamproduct2').click(function() {
    $('.dreamsproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.productinfo2').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.dreamproduct3').click(function() {
    $('.dreamsproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.productinfo3').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.dreamproduct4').click(function() {
    $('.dreamsproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.productinfo4').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.dreamproduct5').click(function() {
    $('.dreamsproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.productinfo5').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.dreamproduct6').click(function() {
    $('.dreamsproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.productinfo6').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.dreamproduct7').click(function() {
    $('.dreamsproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector').css('display', 'none');
    $('.productinfo7').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.souvenirproduct1').click(function() {
    $('.souvenirproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector4').css('display', 'none');
    $('.productinfo8').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.souvenirproduct2').click(function() {
    $('.souvenirproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector4').css('display', 'none');
    $('.productinfo9').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
  $('.souvenirproduct3').click(function() {
    $('.souvenirproducts').css('display', 'none');
    $('.containermain').css('display', 'none');
    $('.points1').css('display', 'none');
    $('.vector4').css('display', 'none');
    $('.productinfo10').css('display', 'block');
    $('.arrowblue').css('display', 'block');
  });
});

$(function() {
  $('.arrowblue').click(function() {
    $('.containermain').css('display', 'grid');
    $('.dreamsproducts').css('display', 'grid');
    $('.vector').css('display', 'block');
    $('.arrowblue').css('display', 'none');
    $('.productinfo1').css('display', 'none');
    $('.productinfo2').css('display', 'none');
    $('.productinfo3').css('display', 'none');
    $('.productinfo4').css('display', 'none');
    $('.productinfo5').css('display', 'none');
    $('.productinfo6').css('display', 'none');
    $('.productinfo7').css('display', 'none');
    $('.points1').css('display', 'flex');
    $('.arrowblue').css('display', 'none');
    $('.productinfo8').css('display', 'none');
    $('.productinfo9').css('display', 'none');
    $('.productinfo10').css('display', 'none');
  });
});

$(function() {
  $('.buy').click(function() {
    $('.welldone').fadeIn();
  });
});

$(function() {
  $('.close6').click(function() {
    $('.welldone').fadeOut();
  });
});


$(function() {
  $('.arrowdown').click(function() {
    $('.texthistory1').fadeOut();
    $('.book1').fadeIn(100);
    $('.arrowdown').css('display', 'none');
    $('.arrowdownwhite').css('display', 'block');
  });
  $('.arrowdownwhite').click(function() {
    $('.book1').css('display', 'none');
    $('.winx').fadeIn(100);
    $('.arrowdownwhite').css('display', 'none');
  });
});

$(function() {
  $('.where').click(function() {
    $('.shape3a').css('display', 'none');
    $('.background2').css('display', 'block');
    $('iframe').css('display', 'block');
    $('.aboutwhere').css('display', 'block');
    $('.formamain').css('display', 'none');
    $('.bg2').css('display', 'none');
  });
  $('.who').click(function() {
    $('.shape3a').css('display', 'none');
      $('.background2').css('display', 'none');
        $('.aboutwhere').css('display', 'none');
    $('iframe').css('display', 'none');
    $('.formamain').css('display', 'block');
    $('.bg2').css('display', 'block');
  });
});


$(function() {
  $('.rad-label4').click(function() {
    $('.fontposter').css('display', 'none');
    $('.fontposter2').css('display', 'block');
    $('.fontposter3').css('display', 'none');
  });
  $('.rad-label3').click(function() {
    $('.fontposter').css('display', 'block');
    $('.fontposter2').css('display', 'none');
    $('.fontposter3').css('display', 'none');
  });
  $('.rad-label5').click(function() {
    $('.fontposter').css('display', 'none');
    $('.fontposter2').css('display', 'none');
    $('.fontposter3').css('display', 'block');
  });
  $('.rad-label6').click(function() {
    $('.tell1').css('display', 'block');
    $('.tell2').css('display', 'none');
    $('.tell3').css('display', 'none');
    $('.tell4').css('display', 'none');
  });
  $('.rad-label7').click(function() {
    $('.tell1').css('display', 'none');
    $('.tell2').css('display', 'block');
    $('.tell3').css('display', 'none');
    $('.tell4').css('display', 'none');
  });
  $('.rad-label8').click(function() {
    $('.tell1').css('display', 'none');
    $('.tell2').css('display', 'none');
    $('.tell3').css('display', 'block');
    $('.tell4').css('display', 'none');
  });
  $('.rad-label9').click(function() {
    $('.tell1').css('display', 'none');
    $('.tell2').css('display', 'none');
    $('.tell3').css('display', 'none');
    $('.tell4').css('display', 'block');
  });
  $('.rad-label10').click(function() {
    $('.obraz1').css('display', 'block');
    $('.obraz2').css('display', 'none');
    $('.obraz3').css('display', 'none');
  });
  $('.rad-label11').click(function() {
    $('.obraz1').css('display', 'none');
    $('.obraz2').css('display', 'block');
    $('.obraz3').css('display', 'none');
  });
  $('.rad-label12').click(function() {
    $('.obraz1').css('display', 'none');
    $('.obraz2').css('display', 'none');
    $('.obraz3').css('display', 'block');
  });
});

$(function() {
  $('.option1').mouseenter(function() {
    $('.optioncircle').fadeIn();
  });
  $('.option2').mouseenter(function() {
    $('.optioncircle2').fadeIn();
  });
  $('.option1').mouseleave(function() {
    $('.optioncircle').fadeOut();
  });
  $('.option2').mouseleave(function() {
    $('.optioncircle2').fadeOut();
  });
  $('.option1').click(function() {
    $('.optioncircle2').css('display', 'none');
    $('.optioncircle').css('display', 'block');
    $('.imginfo6a').css('display', 'block');
    $('.imginfo6').css('display', 'none');
  });
  $('.option2').click(function() {
    $('.optioncircle').css('display', 'none');
    $('.optioncircle2').css('display', 'block');
    $('.imginfo6a').css('display', 'none');
    $('.imginfo6').css('display', 'block');
  });
});
