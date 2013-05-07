(function($,undefined) {
  $(function() {
    $('.app-step').each(function(i,element) {
      var $element = $(element);
      $element.attr('data-y',500 * (i + 1));
      var offsetX = (i % 4) == 0 ? 0 : ((i % 4) * 500) - 1000;
      $element.attr('data-x',2000 + offsetX);
      var offsetZ = i % 2 == 1 ? 500 : (i % 4) * 500;
      $element.attr('data-z',offsetZ);
      $element.attr('data-rotate-y',90 * i);
    });

    impress().init();
  });
})(jQuery);