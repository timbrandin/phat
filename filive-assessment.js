if (Meteor.isClient) {
  Template.assessment.onRendered(function(){
    $(document).ready(function(){
      $(".buddy").on("swiperight",function(){
        $(this).addClass('rotate-left').delay(700).fadeOut(1);
        $('.buddy').find('.status').remove();

        $(this).append('<div class="status like">Like!</div>');
          if ( $(this).is(':last-child') ) {
            $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
           } else {
              $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
           }
        });

       $(".buddy").on("swipeleft",function(){
        $(this).addClass('rotate-right').delay(700).fadeOut(1);
        $('.buddy').find('.status').remove();
        $(this).append('<div class="status dislike">Dislike!</div>');

        if ( $(this).is(':last-child') ) {
         $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
          alert('Na-na!');
         } else {
            $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
        }
      });

    });

    // Adding assessments
    Traitify.setPublicKey("t5sj1md17qgspe8jkdgkc0otk");
    Traitify.setHost("api-sandbox.traitify.com");
    Traitify.setVersion("v1");


    /*traitify = Traitify.ui.load(assessmentId, ".slide-deck", {
        results: {target: ".results"},
        personalityTypes: {target: ".personality-types"},
        personalityTraits: {target: ".personality-traits"}
    }); // Example selector for widget target*/
  });
}
