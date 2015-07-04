Meteor.startup(function(){
    if (Version.find().count() > 0){
        Version.remove({});
    }
    Version.insert(JSON.parse(Assets.getText("version.json")));
})

Push.allow({
    send: function(userId, notification) {
      return true; // Allow all users to send
    }
});

Meteor.users.allow({
			remove: function(userId){
				return true;
			},
			update: function(userId){
				return true;
			},
			insert: function(userId, role){
				return true;
			}
});

Images.allow({
 		insert: function(){
 				return true;
 		},
 		update: function(){
 				return true;
 		},
 		remove: function(){
 				return true;
 		},
 		download: function(){
 			return true;
 		}
});

// server: publish all question documents
Meteor.publish("allQuestions", function () {
  return Questions.find(); // everything
});

// server: publish all answers documents
Meteor.publish("allAnswers", function () {
  return Answers.find(); // everything
});

// server: publish all images
Meteor.publish("images", function() {
  return Images.find();
});

//server: publish githooks version info
Meteor.publish('version', function () {
  return Version.find();
});

Meteor.publish('notFromBlind', function () {
  return BlindNotification.find();
});

Meteor.methods({
  serverNotification: function () {
    BlindNotification.insert({
      addedAt: new Date()
    }, function (error, result) {
      if (!error) {
        Push.send({
          from: Meteor.user().username,
          title: 'you have unseen notifications',
          text: 'new Question was asked',
          payload: {
            title: 'you have unseen notifications',
            historyId: result
          },
          query: {}
        });
      }
    });
  }
});
