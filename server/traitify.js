var Future = Npm.require("fibers/future");

Meteor.methods({
  createAssessment: function() {
    var fut = new Future();
    // live url
    // Traitify.setHost("https://api.traitify.com");

    // testing url
    Traitify.setHost("api-sandbox.traitify.com");

    Traitify.setVersion("v1");
    Traitify.setPrivateKey("ooo27me7jd8p9p4p0hf7d66tld");

    Traitify.createAssessment('introvert-extrovert', function(assessment) {
      fut.return(assessment);
    });

    return fut.wait();
  },
  getSlides: function(assessment_id) {
    var fut = new Future();
    
    Traitify.setHost("api-sandbox.traitify.com");

    Traitify.setVersion("v1");
    Traitify.setPrivateKey("ooo27me7jd8p9p4p0hf7d66tld");
   
    Traitify.getSlides("76db9f07-6fd5-4b86-b793-88bd857b2824", function(slides) {
      fut.return(slides);
    });
    
    return fut.wait();
  }
});

// Meteor.startup(function() {
//   Meteor.call('createAssessment', function(err, res) {
//     console.log(res);
//   });
// });
