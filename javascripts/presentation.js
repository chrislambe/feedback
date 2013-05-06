(function($,undefined) {
  $(function() {
    $('.app-step').each(function(i,element) {
      var $element = $(element);
      $element.attr('data-y',500 * (i + 1));
      $element.attr('data-x',2000);
    });

    impress().init();
  });
})(jQuery);