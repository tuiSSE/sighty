Router.map(function(){
	this.route("homeBlind", {path:"/homeBlind"})
})

Template.homeBlind.events({
	"click #btn_logout_homeBlind1":function(event, template){
		Meteor.logout();
		Router.go("login")
	},
	"click #btn_logout_homeBlind2":function(event, template){
		Meteor.logout();
		Router.go("login")
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
	"click #btn_goto_newQuestion":function(event, template){
		Router.go("newQuestion")
	}
})

Template.homeBlind.rendered=function(){
	$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
	$(document).ready(function(){
      $('.slider').slider({
				height: 800,	
     	interval: 600000000
      });
    });
}

Template.homeBlind.helpers({
//	username:function(){
//		return Meteor.user().username;
//	},
//	profilbild:function(){
//		return Meteor.user().profile.profilbild;
//	},
	questions: function(){
		return Questions.find();
  }
});
