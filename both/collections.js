Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
Version = new Meteor.Collection("version");

Questions.allow({
    remove:function(){
        return true;
    }
})

var imageStore = new FS.Store.GridFS("images", { transformWrite: createThumb });
Images = new FS.Collection("images", {
 stores: [imageStore]
});

var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
};
