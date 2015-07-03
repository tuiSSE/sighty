Meteor.startup(function(){
  Meteor.subscribe("allQuestions");
  Meteor.subscribe("allAnswers");
  Meteor.subscribe("images");
  Meteor.subscribe("version");
  if (Meteor.isCordova) {
		window.alert = navigator.notification.alert;
	}

	Push.addListener('message', function(notification) {
		// Called on every message
		console.log(JSON.stringify(notification))
		alert(notification.message);
	});
})
