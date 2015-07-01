Template.homeHelper.events({
	"click #btn_logout_homeHelper1":function(event, template){
		Router.go("confirmLogout")
	},
	"click #btn_logout_homeHelper2":function(event, template){
		Router.go("confirmLogout")
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
	},
	'click #submit-answer': function (event,template) {
		event.preventDefault();
	  var text = template.find("#answer").value;
	  var newAns = {
	  	text: text,
	    createdAt: new Date(),
	    userId: Meteor.userId(),
			questionId: $("#homeHelferCont").attr("quesId"),
			ratingPoints: 0
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
		},
	"click .delete":function(event, template){
        var answer = document.getElementById("answersItem");
        answer.remove("quesId");
        var button= document.getElementById("Löschen");
        button.remove("quesId");
        var button= document.getElementById("Haken");
        button.remove("quesId");
        },

	"click .correct":function(event, template) {
    alert("correct button");
	}
}),

Template.homeHelper.rendered=function(){
	$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
	$(document).ready(function(){
    $('.slider').slider({
     	height: 900,
     	interval: 600000000
    });
		$('.materialboxed').materialbox();
    });
}

Template.homeHelper.helpers({
	username:function(){
		return Meteor.user().username;
	},
	profilbild:function(){
		return Meteor.user().profile.profilbild;
	},
	questions: function(){
		return Questions.find().fetch();
	},
	answers: function(qId){
		return Answers.find({questionId: qId});
	}
})
