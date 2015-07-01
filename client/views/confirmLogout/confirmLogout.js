Template.confirmLogout.events({


"click #btn_confirmLogout":function(event, template){
  Meteor.logout();
  Router.go("/")
},

"click #btn_abortLogout":function(event, template){
  if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
    Router.go("homeHelper")
  } else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
    Router.go("homeBlind")
  };
},

})
