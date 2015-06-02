Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");

var imageStore = new FS.Store.GridFS(“images”);
Images = new FS.Collection(“images”, {
 stores: [imageStore]
});

//subscribe to get the records on client side
if(Meteor.isClient) {
    Meteor.subscribe("allQuestions");
    Meteor.subscribe("allAnswers");
    Meteor.subscribe("images");
}
