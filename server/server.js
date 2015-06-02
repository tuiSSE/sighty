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
