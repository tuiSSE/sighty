Router.map(function(){
	this.route("chooseUserclass", {path: "/chooseUserclass"})
})

Template.chooseUserclass.helpers({
	username:function(){
		return Meteor.user().username
	}
})

Template.chooseUserclass.events({
	"click #btn_changeUsername_register":function(event, template){
		Router.go("chooseUserclass")
		event.preventDefault();
		Meteor.users.update({_id: Meteor.userId()}, { $set: {"username": template.find("#username_register").value }} );
	},
	"click #btn_chooseHelper_register":function(event, template){
		Roles.addUsersToRoles({_id: Meteor.userId()}, ["helper"])
		Router.go("homeHelper")
	},
	"click #btn_chooseBlind_register":function(event, template){
		Roles.addUsersToRoles({_id: Meteor.userId()}, ["blind"])
		Router.go("homeBlind")
		
	}

})