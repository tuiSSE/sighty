Meteor.startup(function(){
  Meteor.subscribe("allQuestions");
  Meteor.subscribe("allAnswers");
  Meteor.subscribe("version");
})
