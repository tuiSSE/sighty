Template.about.rendered=function(){
	$('.button-collapse').sideNav({
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
}

Template.about.helpers({
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

Template.about.events({
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
	}
})
