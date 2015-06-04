Meteor.startup(function() {
  Meteor.users.find().observe({
    added: function(doc) {
      if (!doc.profile && doc.emails[0] && Gravatar) {
        Meteor.users.upsert({_id: doc._id}, {$set: {'profile': Gravatar.imageUrl(doc.emails[0].address)}});
      }
    }
  });
});
