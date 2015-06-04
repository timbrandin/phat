if (Meteor.isClient) {
  Template.assessment.onCreated(function(){
    var instance = this;
    
    instance.ass = new ReactiveVar(false);
    instance.slides = new ReactiveVar(false);
  });

  Template.assessment.onRendered(function(){
    var instance = this;
   
    Meteor.call("createAssessment",function(err, res){ 
      var assessment_id = res.id;
      instance.ass.set(assessment_id);
      Meteor.call("getSlides", assessment_id, function (err,res) {
        instance.slides.set(res);
        
      });
    });
    // Adding assessments
    Traitify.setPublicKey("t5sj1md17qgspe8jkdgkc0otk");
    Traitify.setHost("api-sandbox.traitify.com");
    Traitify.setVersion("v1");

    instance.autorun(function() {
      var assessment_id = instance.ass.get();
      var slides = instance.slides.get();
      if (slides) {
        //setSlideListener();
       
      }
    })
     
      
      function setSlideListener(){
        $(".buddy").on("swiperight",function(){
          var slide_id = $(this).attr('data-id');
          var slide_position = $(this).attr('data-position');

          console.log('ME - ' + slide_id);
          $(this).addClass('rotate-left').delay(700).fadeOut(1);
          $('.buddy').find('.status').remove();

          $(this).append('<div class="status like">ME!</div>');
            if ( $(this).is(':last-child') ) {
              $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
             } else {
                $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
             }
          });

         $(".buddy").on("swipeleft",function(){
           console.log('ME - ' + slide_id);
           
          $(this).addClass('rotate-right').delay(700).fadeOut(1);
          $('.buddy').find('.status').remove();
          $(this).append('<div class="status dislike">NOT ME!</div>');

          if ( $(this).is(':last-child') ) {
           $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
            alert('Na-na!');
           } else {
              $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
          }
        });
         
      }
  });
  
  Template.assessment.helpers({
    slides: function() {
      return Template.instance().slides.get();
    },
    
    first: function() {
      return this.position == 1;
    }
  });
  
  Template.assessment.events({
    "swipeleft .buddy": function (e, instance) {
      var slide_id = this.id;
      console.log();
      var slide_position = this.position;
      console.log('Not ME - ' + slide_id);
      $('#id-' + this.id).addClass('rotate-right').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();
      $(e.target).append('<div class="status dislike">NOT ME!</div>');
      if ( $('#id-' + this.id).is(':last-child')) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
        alert('Na-na!');
      } else {
        $(e.target).next().removeClass('rotate-left rotate-right').fadeIn(400);
      }
    }
  })
}
