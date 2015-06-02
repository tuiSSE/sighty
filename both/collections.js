Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
Version = new Meteor.Collection("version");

var imageStore = new FS.Store.GridFS("images");
Images = new FS.Collection("images", {
 stores: [imageStore]
});