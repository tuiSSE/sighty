Template.newQuestion.events({
	'click #capture': function(){
      MeteorCamera.getPicture({}, function(error, data){
        for (var i=1; i<5; i++)
        {
          if (Session.get('photo' + i) == null)
          {
            Session.set('photo' + i, data);
						$("#deletePic"+i).removeClass("disabled");
            break;
          }
        }
    });
  },
	'click #browse': function (event, template) {
		$('#fileInput').click(); //trigger the fileUpload dialog
	},
	'change #fileInput': function(event, template) {
      FS.Utility.eachFile(event, function(file) {
				for (var i=1; i<5; i++)
				{
					if (Session.get('photo' + i) == null)
					{
						Images.insert(file, function (err, fileObj) {
		          if (err){
								alert("Error " + err.reason);
		          } else {
								var url = "/cfs/files/images/" + fileObj._id;
								Session.set('photo'+i, url);
								$("#deletePic"+i).removeClass("disabled");
							}
		        });
						break;
					}
				}
     });
   },
  'click #submit-question': function (event,template) {
      event.preventDefault();
      var fragesteller = Meteor.user().username;
      var text = template.find("#question").value;
			var photo1Id = Session.get('photo1');
			var photo2Id = Session.get('photo2');
			var photo3Id = Session.get('photo3');
			var photo4Id = Session.get('photo4');
      var newQues = {
        fragesteller: fragesteller,
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
					else {
						Session.set('photo1', null);
						Session.set('photo2', null);
						Session.set('photo3', null);
						Session.set('photo4', null);
						$('#question').val('');
						Meteor.call("serverNotification");
						$('#btn_gobackto_homeBlind').click();
					}
        }
      );

  },
  'click #deletePic1': function (event,template) {
    event.preventDefault();
    if(Session.get('photo1'))
    {
        Session.set('photo1', null);
				$("#deletePic1").addClass("disabled");
    }
  },
  'click #deletePic2': function (event,template) {
    event.preventDefault();
    if(Session.get('photo2'))
    {
        Session.set('photo2', null);
				$("#deletePic2").addClass("disabled");
    }
  },
  'click #deletePic3': function (event,template) {
    event.preventDefault();
    if(Session.get('photo3'))
    {
        Session.set('photo3', null);
				$("#deletePic3").addClass("disabled");
    }
  },
  'click #deletePic4': function (event,template) {
    event.preventDefault();
    if(Session.get('photo4'))
    {
        Session.set('photo4', null);
				$("#deletePic4").addClass("disabled");
    }
  },
    "click #btn_goto_home1":function(event, template){
        if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
            Router.go("homeHelper")
        } else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
            Router.go("homeBlind")
        };
    },
    "click #btn_goto_home2":function(event, template){
        if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
            Router.go("homeHelper")
        } else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
            Router.go("homeBlind")
        };
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
    username:function(){
        return Meteor.user().username;
    },
    profilbild:function(){
        return Meteor.user().profile.profilbild;
    }
});

Template.newQuestion.rendered=function(){
    $('.button-collapse').sideNav({
        menuWidth: 200, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    })
}
