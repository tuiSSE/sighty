Meteor.startup(function(){
  Meteor.subscribe("allQuestions");
  Meteor.subscribe("allAnswers");
  Meteor.subscribe("images");
  Meteor.subscribe("version");
})
