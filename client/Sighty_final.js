if (Meteor.isClient) {
  
  Router.map(function(){
    this.route("login", {path: "/"})
    this.route("register", {path: "/register"})
    this.route("registerSehender", {path: "/registerSehender"})
    this.route("startseiteSehender", {path: "/startseiteSehender"})
    this.route("registerBlinder01", {path: "/registerBlinder01"})
    this.route("registerBlinder02", {path: "/registerBlinder02"})
    this.route("registerBlinder03", {path: "/registerBlinder03"})
    this.route("registerBlinder04", {path: "/registerBlinder04"})
    this.route("registerBlinder05", {path: "/registerBlinder05"})
    this.route("profile", {path: "/profile"})
  })
  
  Template.registerSehender.events({
    "click #register_confirm_1":function(event,template){
      event.preventDefault();
      var firstName = template.find("#firstNameSehender").value;
      var lastName = template.find("#lastNameSehender").value;
      var date = template.find("#birthdaySehender").value;
      var user = template.find("#usernameSehender").value;
      var emailVar = template.find("#emailSehender").value;
      var passwordVar = template.find("#passwordSehender").value;
      Accounts.createUser({
        profile: {
          vorname: firstName,
          nachname: lastName,
          geburtstag: date,
          benutzername: user
        },
        email: emailVar,
        password: passwordVar
      })
      Meteor.loginWithPassword(emailVar, passwordVar, function(){
        if (Meteor.user()) {
        Router.go("startseiteSehender")
      };
      });
      
    }

  })

   Template.registerSehender.rendered = function(){
   $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 100, // Creates a dropdown of 15 years to control year
    today: "Heute",
    close: "Fertig",
    clear: "Abbruch"
  });
 }

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

 Template.startseiteSehender.rendered = function(){
  $('.button-collapse').sideNav({
      menuWidth: 240, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
      
 }

}

