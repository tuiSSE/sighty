Router.map(function(){
    this.route("login", {path: "/sighty/"})
    this.route("register", {path: "/register"})
    this.route("registerSehender", {path: "/registerSehender"})
    this.route("startseiteSehender", {path: "/startseiteSehender"})
    this.route("registerBlinder01", {path: "/registerBlinder01"})
    this.route("registerBlinder02", {path: "/registerBlinder02"})
    this.route("registerBlinder03", {path: "/registerBlinder03"})
    this.route("registerBlinder04", {path: "/registerBlinder04"})
    this.route("registerBlinder05", {path: "/registerBlinder05"})
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
      Meteor.loginWithPassword(emailVar, passwordVar);
      if (Meteor.user()) {
        Router.go("startseiteSehender")
      };
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
      Meteor.loginWithPassword(emailVar, passwordVar);
      if (Meteor.user()) {
        Router.go("startseiteSehender")
      };
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
   }
  })

  Template.takePhoto.events({
        'click #capture': function(){
            console.log("Button clicked.");
            MeteorCamera.getPicture({}, function(error, data){
            console.log(data);
            Session.set('photo', data);
            });
        },
        "click #input-8":function(event,template){
            event.preventDefault();
            Meteor.logout();
            Router.go("login")
        },
        "click #profil":function(event, template){
            event.preventDefault();
            Router.go("profile")
        },
        "click #home":function(event, template){
            Router.go("startseite")
        },
        "submit #takePhoto": function (event) {
            event.preventDefault();
            var text = event.target.frage.value;
            var newQues = {
              text: text,
              createdAt: new Date(), // current time
              userId: Meteor.userId()
            };
            Meteor.call("addQuestion",newQues,
              function (err, result) {
                if (err) {
                    alert("Could not add question " + err.reason);
                }
            }
          );
          // Clear form
          event.target.frage.value = "";
      }
    });

    Template.takePhoto.helpers({
        'photo': function(){
            return Session.get('photo');
        },
    });

    Template.takePhoto.helpers({
      firstName: function(){
          return Meteor.user().profile.first_name;
        },
        lastName: function(){
          return Meteor.user().profile.last_name;
        },
        geburtstag: function(){
          return Meteor.user().profile.date_of_birth;
        },
        user: function(){
          return Meteor.user().profile.benutzername;
        }
    })

    Template.profile.helpers({
      firstName: function(){
          return Meteor.user().profile.first_name;
        },
        lastName: function(){
          return Meteor.user().profile.last_name;
        },
        geburtstag: function(){
          return Meteor.user().profile.date_of_birth;
        },
        user: function(){
          return Meteor.user().profile.benutzername;
        }
    })

    Template.profile.events({
      "click #output-6":function(event,template){
        event.preventDefault();
        Router.go("startseite")
      },

      "click #output-7":function(event, template){
        Meteor.users.remove("Meteor.userId()");
        Router.go("login")
      },
      "click #output-aendern":function(event, template){
        event.preventDefault();
        Meteor.users.update({_id: Meteor.userId()}, { $set: {"profile.first_name": template.find("#output-1").value }} );
        Meteor.users.update({_id: Meteor.userId()}, { $set: {"profile.last_name": template.find("#output-2").value }});
        Meteor.users.update({_id: Meteor.userId()}, { $set: {"profile.date_of_birth": template.find("#output-3").value }} );
        Meteor.users.update({_id: Meteor.userId()}, { $set: {"profile.benutzername": template.find("#output-4").value }} );
        Router.go("profile")
      }
