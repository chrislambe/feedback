(function($,undefined) {
  var typeMeElements = new Array();
  var typeCursor = null;
  var introTimeout = null;

  $(function() {
    $('.app-step').each(function(i,element) {
      var $element = $(element);
      $element.attr('data-y',1000 * (i + 1));
      var offsetX = (i % 4) == 0 ? 0 : ((i % 4) * 500) - 1000;
      $element.attr('data-x',4000 + offsetX);
      var offsetZ = i % 2 == 1 ? 500 : (i % 4) * 500;
      $element.attr('data-z',offsetZ);
      $element.attr('data-rotate-y',90 * i);
    });

    impress().init();

    typeCursor = $('<span/>').addClass('text-cursor');

    typeMeElements = $.makeArray($('.type-me'));
    $(typeMeElements[0]).before(typeCursor);

    var introDelay = 2000;
    introTimeout = setTimeout(function() {
      // If we let the timeout fire, we don't need the click
      $('body').off('click');
      typeMe(typeMeElements.shift());
    },introDelay);
    $('#timer-display').animate({width:'0%'},introDelay,'linear');

    // First click kills the auto-type timer
    $('body').one('click',function(e) {
      clearTimeout(introTimeout);
      $('#timer-display').stop().fadeOut('fast');
      // Second click runs the intro animation
      $('body').one('click',function(e) {
        typeMe(typeMeElements.shift());
      });
    });
  });

  var typeMe = function(element)
  {
    var $element = $(element);
    var content = $element.html();
    $element.html('&nbsp;');
    $element.css('display','inline');

    var totalTime = 0;
    var i = 0;
    var c = content.length;
    for(i;i < c;i++)
    {
      totalTime += Math.round(Math.random() * 350) + 75;
      setTimeout(setContent,totalTime,element,content.substring(0,i + 1));
    }

    if(typeMeElements.length > 0) setTimeout(typeMe,totalTime,typeMeElements.shift());
    $element.after(typeCursor);
  }

  var setContent = function(element,content)
  {
    $element = $(element);
    $element.html(content);
  }
})(jQuery);