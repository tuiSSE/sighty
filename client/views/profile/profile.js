Router.map(function(){
	this.route("profile", {path: "/profile"})
})

Template.profile.rendered=function(){
	$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
}

Template.profile.helpers({
	username: function(){
		return Meteor.user().username;
	},
	email: function(){
		return Meteor.user().emails[0].address;
	}
})

Template.profile.events({
	"click #btn_goto_home1":function(event,template){
		if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
			Router.go("homeHelper")
		} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
			Router.go("homeBlind")
		};
	},
	"click #btn_goto_home2":function(event,template){
		if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
			Router.go("homeHelper")
		} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
			Router.go("homeBlind")
		};
	},
	"click #btn_logout_profile1":function(event, template){
		Meteor.logout();
		Router.go("login")
	},
	"click #btn_logout_profile2":function(event, template){
		Meteor.logout();
		Router.go("login")
	},
	"click #btn_change_profile":function(event, template){
		Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": template.find("#username_profile").value}} );

		Router.go("profile")
	},
	"click #btn_randomUsername":function(event,template){
		Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": Random.id([6])}} );
		Router.go("profile")
	},
	"click #btn_delete_profile":function(event, template){
		Meteor.users.remove({_id: Meteor.userId()});
		Router.go("userDeleted")
	}
})