Meteor.startup(function() {
  var t;
  Template.onRendered(function() {
    if (this.view.name == 'Template.message') {
      Meteor.clearTimeout(t);
      t = Meteor.setTimeout(function() {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    }
    else if (this.view.name == 'Template._loginButtonsLoggedIn') {
      $('textarea').bind('keypress.filive', function(e) {
        if (e.keyCode == 13) {
          window.scrollTo(0, document.body.scrollHeight);
          $(this).blur();
        }
      });
      $('textarea').bind('click.filive', function(e) {
        window.scrollTo(0, document.body.scrollHeight);
      });
    }
  });
});
