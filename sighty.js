if (Meteor.isClient) {

  Router.map(function(){
    this.route("register", {path: "/register"})
    this.route("login", {path: "/"})
    this.route("takePhoto", {path: "/takePhoto"})
  })

  Template.login.events({
    "submit form":function(event, template){
      event.preventDefault();
      var emailVar = template.find("#input-1").value;
      var passwordVar = template.find("#input-2").value;
      Meteor.loginWithPassword(emailVar, passwordVar);
      if (Meteor.user()) {
        Router.go("takePhoto")
      };
    },
    "click #input-7":function(event){
      event.preventDefault();
      Router.go("register")
    }
  })

  Template.register.events({
    "submit form":function(event,template){
      event.preventDefault();
      var emailVar = template.find("#input-4").value;
      var passwordVar = template.find("#input-5").value;
      Accounts.createUser({
        email: emailVar,
        password: passwordVar
      })
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
    }

    });

    Template.takePhoto.helpers({
        'photo': function(){
            return Session.get('photo');
        }
    });
}
