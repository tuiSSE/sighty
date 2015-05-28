Router.map(function(){
	this.route("homeHelper", {path: "/homeHelper"})
})

Template.homeHelper.events({
	"click #btn_logout_homeHelper1":function(event, template){
		Meteor.logout();
		Router.go("login")
	},
	"click #btn_logout_homeHelper2":function(event, template){
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
	}
})

Template.homeHelper.rendered=function(){
	$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
	$(document).ready(function(){
      $('.slider').slider({
     	height: 600,
     	interval: 600000000
      });
    });
    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
}

Template.homeHelper.helpers({
	username:function(){
		return Meteor.user().username;
	}, 
	profilbild:function(){
		return Meteor.user().profile.profilbild;
	}
})