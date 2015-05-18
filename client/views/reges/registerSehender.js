Router.map(function(){
    this.route("register", {path: "/register"})
    this.route("registerSehender", {path: "/registerSehender"})
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
