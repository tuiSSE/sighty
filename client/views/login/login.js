Router.map(function(){
    this.route("login", {path: "/"})
  })


Template.login.events({
 "click #btn_login":function(event, template){
   var emailVar = template.find("#email").value;
   var passwordVar = template.find("#password").value;
   Meteor.loginWithPassword(emailVar, passwordVar, function(){
     if (Meteor.user()) {
     Router.go("startseiteSehender")
   };
   });
 }
})

Template.login.events({
 "click #btn_facebook":function(event, template){
   Meteor.loginWithFacebook({}, function(){
     if (Meteor.user()) {
     Router.go("startseiteSehender")
   }
   });

 },
 "click #btn_twitter":function(event, template){
   Meteor.loginWithTwitter({}, function(){
     if (Meteor.user()) {
       Router.go("startseiteSehender")
     };
   })
 }
})
