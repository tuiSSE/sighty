Router.map(function(){
    this.route("startseiteSehender", {path: "/startseiteSehender"})
    this.route("profile", {path: "/profile"})
  })


Template.startseiteSehender.events({
 "click #btn_logout":function(event, template){
   Meteor.logout();
   Router.go("login")
 }
})

Template.startseiteSehender.helpers({
 vorname:function(){
   return Meteor.user().profile.vorname;
 },
 user:function(){
   return Meteor.user().profile.benutzername;
 }
})

Template.startseiteSehender.rendered = function(){
 $('.button-collapse').sideNav({
     menuWidth: 240, // Default is 240
     edge: 'left', // Choose the horizontal origin
     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
   }
 );

}
