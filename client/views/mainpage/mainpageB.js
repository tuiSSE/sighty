Template.mainpageBlinder.events({
  'click #capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
        for (var i=1; i<5; i++)
        {
          if (Session.get('photo' + i) == null)
          {
            Session.set('photo' + i, data);
            break;
          }
        }
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
    'photo1': function(){
        return Session.get('photo1');
    },
    'photo2': function(){
        return Session.get('photo2');
    },
    'photo3': function(){
        return Session.get('photo3');
    },
    'photo4': function(){
        return Session.get('photo4');
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
          for (var i=1; i<5; i++)
          {
            if (Session.get('photo' + i) == null)
            {
              Session.set('photo' + i, fileInfo.url);
              break;
            }
          }
        }
    }
  }
});
