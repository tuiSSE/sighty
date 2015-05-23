Router.map(function(){
	this.route("newQuestion", {path: "/newQuestion"})
})

Template.newQuestion.events({
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
            alert("Error " + err.reason);
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
            alert("Error " + err.reason);
        }
    });
    Session.set('answer', text);
  },
  'click #deletePic1': function (event,template) {
    event.preventDefault();
    if(Session.get('photo1'))
    {
        Session.set('photo1', null);
    }
  },
  'click #deletePic2': function (event,template) {
    event.preventDefault();
    if(Session.get('photo2'))
    {
        Session.set('photo2', null);
    }
  },
  'click #deletePic3': function (event,template) {
    event.preventDefault();
    if(Session.get('photo3'))
    {
        Session.set('photo3', null);
    }
  },
  'click #deletePic4': function (event,template) {
    event.preventDefault();
    if(Session.get('photo4'))
    {
        Session.set('photo4', null);
    }
  }
})