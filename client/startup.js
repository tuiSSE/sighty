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

		function alertDismissed() {
        BlindNotification.update({_id: notification.payload.historyId}, {
				$set: {
					"recievedAt": new Date()
				}
			});
		}
		alert(notification.message, alertDismissed, notification.payload.title, "Ok");
	});
})
