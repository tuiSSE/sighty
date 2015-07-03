Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
Version = new Meteor.Collection("version");
//BlindNotification = new Meteor.Collection("blindNotification");

Questions.allow({
    remove:function(){
        return true;
    }
})

Push.allow({
    send: function(userId, notification) {
      // Allow all users to send to everybody
      return true;
    }
  });

var imageStore = new FS.Store.GridFS("images", { transformWrite: createThumb });
Images = new FS.Collection("images", {
 stores: [imageStore]
});

var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 60x60px thumbnail
  gm(readStream, fileObj.name()).resize('60', '60').stream().pipe(writeStream);
};
