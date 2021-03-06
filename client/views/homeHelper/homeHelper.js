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
	'click .submit-answer': function (event,template) {
		event.preventDefault();
		var antwortverfasser=Meteor.user().username;
	  var text = $(event.target).prev("input").val();
		console.log(text);
	  var newAns = {
		  antwortverfasser: antwortverfasser,
	  	text: text,
	    createdAt: new Date(),
	    userId: Meteor.userId(),
			questionId: $(event.target).closest(".homeHelferCont").attr("quesId"),
			ratingPoints: 0
	  };
	  Meteor.call("addAnswer",newAns,
	   function (err, result) {
	   		if (err) {
	      	alert("Error " + err.reason);
	      }
				else {
					for (var i=1; i<5; i++)
					{
						if (Session.get('answer' + i) == null)
						{
							Session.set('answer' + i, text);
							break;
						}
					}
					$('.answer').val('');
					Meteor.call("serverHelperNotification");

				}
	   });
		},
	"click .delete":function(event, template){
				Answers.remove(this._id);
        },

	"click. correct": function saveEdits() {
            var editElem = document.getElementById('edit'); //Antwort = editElem, innerHTML, editierbar
            var userVersion = editElem.innerHTML;
            localStorage.userEdits = userVersion;
            document.getElementById("update").innerHTML = "Edits saved!";
            function checkEdits() {
                if (localStorage.userEdits != null)
                    document.getElementById('edit').innerHTML = localStorage.userEdits;
                var editElem = document.getElementById('edit');
                editElem.contentEditable = "false";
            }
        }
}),

Template.homeHelper.rendered=function(){
	$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
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
	},
	notific: function(){
		var temp = BlindNotification.find().fetch();
		if (temp.length > 0) {
				Materialize.toast('You have unread questions', 3000, 'rounded');
		}
	}
})
