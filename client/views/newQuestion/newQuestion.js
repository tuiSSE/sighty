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
			var photo1Id = Session.get('photo1');
			var photo2Id = Session.get('photo2');
			var photo3Id = Session.get('photo3');
			var photo4Id = Session.get('photo4');
      var newQues = {
        text: text,
        createdAt: new Date(),
        userId: Meteor.userId(),
				pic1Id: photo1Id,
				pic2Id: photo2Id,
				pic3Id: photo3Id,
				pic4Id: photo4Id
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
		for (var i=1; i<5; i++)
		{
			if (Session.get('answer' + i) == null)
			{
				Session.set('answer' + i, text);
				break;
			}
		}
		event.target.answer.value = "";
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
});

Template.newQuestion.helpers({
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
    'answer1': function(){
        return Session.get('answer1');
    },
		'answer2': function(){
        return Session.get('answer2');
    },
		'answer3': function(){
        return Session.get('answer3');
    },
		'answer4': function(){
        return Session.get('answer4');
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
