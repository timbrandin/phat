Meteor.startup(function () {
  if(Meteor.isCordova){
    StatusBar.hide();
  }
});
