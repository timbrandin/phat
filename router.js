Router.route('/', function() {
  this.render('assessment');
});

Router.route('/group/:group', function() {
  this.render('messages');
});
