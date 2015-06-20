Template.settings.rendered=function(){
	$('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
}
Template.settings.helpers({
	profilbild:function(){
		return Meteor.user().profile.profilbild;
	},
	username:function(){
		return Meteor.user().username;
	},
	version:function(){
    return Version.findOne();
  }
})
Template.settings.events({
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
	"click #btn_logout_about1":function(event, template){
		Router.go("confirmLogout")
	},
	"click #btn_logout_about2":function(event, template){
		Router.go("confirmLogout")
	},
	"click #btn_changeSettings":function(event, template){
		if(document.getElementById("test4").checked){
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "blue")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "red")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "yellow")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "green")
			Roles.addUsersToRoles({_id: Meteor.userId()}, "blue")
		} else if(document.getElementById("test1").checked){
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "blue")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "red")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "yellow")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "green")
			Roles.addUsersToRoles({_id: Meteor.userId()}, "red")
		} else if(document.getElementById("test2").checked){
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "blue")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "red")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "yellow")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "green")
			Roles.addUsersToRoles({_id: Meteor.userId()}, "yellow")
		} else if(document.getElementById("test3").checked){
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "blue")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "red")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "yellow")
			Roles.removeUsersFromRoles({_id: Meteor.userId()}, "green")
			Roles.addUsersToRoles({_id: Meteor.userId()}, "green")
		}
	}
})
