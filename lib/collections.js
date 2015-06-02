Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
Version = new Meteor.Collection('version');

//subscribe to get the records on client side
if(Meteor.isClient) {
    Meteor.subscribe("allQuestions");
    Meteor.subscribe("allAnswers");
}
