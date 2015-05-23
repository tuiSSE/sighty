Router.map(function(){
  this.route("login", {path:"/"})
})

Template.login.rendered=function(){
	   $(document).ready(function(){
    $('ul.tabs').tabs();
  });
}

Template.login.events({
	"click #btn_login_login":function(event, template){
		emailVar = template.find("#email_login").value;
		passwordVar = template.find("#password_login").value;
		Meteor.loginWithPassword(emailVar, passwordVar, function(){
			if (Meteor.user()) {
				if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")){
					Router.go("homeHelper")
				} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
					Router.go("homeBlind")
				};
			};
		})
	},
	"click #btn_register_register":function(event, template){
		emailVar = template.find("#email_register").value;
		passwordVar = template.find("#password_register").value;
		Accounts.createUser({
			email: emailVar,
			password: passwordVar,
			username: Random.id([6])
		})
		Meteor.loginWithPassword(emailVar, passwordVar, function(){
			if (Meteor.user()) {
				Router.go("chooseUserclass")
			};
		})
	},
	"click #btn_login_facebook":function(event, template){
		Meteor.loginWithFacebook(function(){
			if (Meteor.user()) {
				if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
					Router.go("homeHelper")
				} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
					Router.go("homeBlind")
				};
			};
		});
	},
	"click #btn_login_twitter":function(event, template){
		Meteor.loginWithTwitter(function(){
			if (Meteor.user()) {
				if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
					Router.go("homeHelper")
				} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
					Router.go("homeBlind")
				};
			};
		});
	},
	"click #btn_register_facebook":function(event, template){
		Meteor.loginWithFacebook(function(){
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": Random.id([6])}} );
			if (Meteor.user()) {
				Router.go("chooseUserclass")
			};
		});
	},
	"click #btn_register_twitter":function(event, template){
		Meteor.loginWithTwitter(function(){
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": Random.id([6])}} );
			if (Meteor.user()) {
				Router.go("chooseUserclass")
			};
		})
	}
})