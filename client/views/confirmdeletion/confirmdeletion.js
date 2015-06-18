Template.confirmdeletion.events({


"click #btn_delete_profile":function(event, template){
  Meteor.users.remove({_id: Meteor.userId()});
  Router.go("userDeleted")
},

"click #btn_gobackto_profile":function(event, template){
  Router.go("profile")
}

})
