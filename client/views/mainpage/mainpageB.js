Template.mainpageBlinder.events({
  'click #capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
        Session.set('photo', data);
    });
  },
  'click #submit-question': function (event,template) {
      event.preventDefault();
      var text = template.find("#question").value;
      var newQues = {
        text: text,
        createdAt: new Date(),
        userId: Meteor.userId()
      };
      Meteor.call("addQuestion",newQues,
        function (err, result) {
          if (err) {
            alert("Could not add question " + err.reason);
          }
        }
      );
      Session.set('question', text);
    },
    'click #submit-answer': function (event,template) {
        event.preventDefault();
        var text = template.find("#answer").value;
        var newAns = {
          text: text,
          createdAt: new Date(),
          userId: Meteor.userId()
        };
        Meteor.call("addAnswer",newAns,
          function (err, result) {
            if (err) {
              alert("Could not add answer " + err.reason);
            }
          }
        );
        Session.set('answer', text);
      }
});

Template.mainpageBlinder.helpers({
    'photo': function(){
        return Session.get('photo');
    },
    'question': function(){
        return Session.get('question');
    },
    'answer': function(){
        return Session.get('answer');
    },
    myCallbacks: function() {
    return {
        finished: function(index, fileInfo, context) {
            Session.set('photo', fileInfo);
        }
    }
  }
});
