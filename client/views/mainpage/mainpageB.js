//Not yet completed

/* prevents deployment
Template.takePhoto.events({
  'click #capture': function(){
      console.log("Button clicked.");
      MeteorCamera.getPicture({}, function(error, data){
      console.log(data);
      Session.set('photo', data);
    });
},

  'submit #takePhoto': function (event) {
      event.preventDefault();
      var text = event.target.frage.value;
      var newQues = {
        text: text,
        createdAt: new Date(), // current time
        userId: Meteor.userId()
      };
      Meteor.call("addQuestion",newQues,
        function (err, result) {
          if (err) {
            alert("Could not add question " + err.reason);
          }
        }
      );
      // Clear form
      event.target.frage.value = "";
    }
});

Template.takePhoto.helpers({
    'photo': function(){
    return Session.get('photo');
  },
});
*/
