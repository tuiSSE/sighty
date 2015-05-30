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
})

// server: publish all question documents
Meteor.publish("allQuestions", function () {
  return Questions.find(); // everything
});

// server: publish all answers documents
Meteor.publish("allAnswers", function () {
  return Answers.find(); // everything
});
