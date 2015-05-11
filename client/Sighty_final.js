if (Meteor.isClient) {

  Router.map(function(){
    this.route("register", {path: "/register"})
    this.route("login", {path: "/"})
    this.route("takePhoto", {path: "/takePhoto"})
    this.route("profile", {path: "/profile"})
    this.route("startseite", {path: "/startseite"})

  })

  Template.login.events({
    "submit form":function(event, template){
      event.preventDefault();
      var emailVar = template.find("#input-1").value;
      var passwordVar = template.find("#input-2").value;
      Meteor.loginWithPassword(emailVar, passwordVar);
     if (Meteor.user()) {
      Router.go("startseite")
     };

    },
    "click #input-7":function(event){
      event.preventDefault();
      Router.go("register")
    },
    "click #login-facebook":function(event){
      event.preventDefault();
      Meteor.loginWithFacebook();
    }
  })



  Template.register.events({
    "submit form":function(event,template){
      event.preventDefault();
      var vorname = template.find("#input-9").value;
      var nachname = template.find("#input-10").value;
      var date = template.find("#input-11").value;
      var userVar = template.find("#input-15").value;
      var emailVar = template.find("#input-4").value;
      var passwordVar = template.find("#input-5").value;
      Accounts.createUser({
        profile: {
            first_name: vorname,
            last_name: nachname,
            date_of_birth: date,
            benutzername: userVar
        },
        username: userVar,
        email: emailVar,
        password: passwordVar


      })
      Meteor.loginWithPassword(emailVar, passwordVar);
      if (Meteor.user()) {
        Router.go("startseite")
      };
    },
    "click #input-14":function(event,template){
      Router.go("login")
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

    })


    Template.startseite.helpers({
      user:function(){
        return Meteor.user().profile.benutzername;
      }
    })

    Template.startseite.events({
      "click #input-8":function(event, template){
        event.preventDefault();
        Meteor.logout();
        Router.go("login")
      },
      "click #profil":function(event, template){
        event.preventDefault();
        Router.go("profile")
      }
    })
}
