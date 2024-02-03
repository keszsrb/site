(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors

Drupal.behaviors.keszrs = {
  attach: function(context, settings) {
    $(window).on('load', function(){
      /*Drupal.behaviors.amcham.scrollme();*/
      Drupal.behaviors.keszrs.bestsite();
    });
  },

  /*scrollme: function() {
    $('a[href*=\\#]').on('click', function(event){     
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
  },*/

  bestsite: function() {
      html = '<h2>O nama</h2>';

      $('#block-footer').once(function(i){
        $(this).prepend(html);           
      });
  },
  
  };

})(jQuery, Drupal, this, this.document);
