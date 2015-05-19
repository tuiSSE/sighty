$(document).ready(function(){
   $('.materialboxed').materialbox();
 });

Template.mainpageBlinder.events({
  'click #capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
        Session.set('photo', data);
    });
  },
  'click #submit-question': function (event) {
      event.preventDefault();
      var text = event.target.question.value;
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
      session.set('question', text);
    },
    'click #submit-answer': function (event) {
        event.preventDefault();
        var text = event.target.answer.value;
        var newQues = {
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
        session.set('answer', text);
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
    }

});
