Template.chooseUserclass.helpers({
	username:function(){
		return Meteor.user().username
	}, 
	profilbild:function(){
		return Meteor.user().profile.profilbild
		
	},
	img:function(){
		return Session.get("img");
	}
})

Template.chooseUserclass.events({
	"click #btn_completeRegistration":function(event, template){
		if(document.getElementById("userclass_helper").checked){
			Roles.addUsersToRoles({_id: Meteor.userId()}, ["helper"])
			Router.go("homeHelper")
		} else if(document.getElementById("userclass_blind").checked){
			Roles.addUsersToRoles({_id: Meteor.userId()},["blind"])
			Router.go("homeBlind")
		};
		Meteor.users.update({_id: Meteor.userId()}, { $set: {"username": template.find("#username_register").value }} );
	},
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
		
	},
	"click #btn_change_profilePic1":function(event, template){
		
			MeteorCamera.getPicture(function(err, data){
				if (err) {
					console.log("error", err);
				};
				if (data) {
					Session.set("img", data)
					Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profilbild": Session.get("img")}} );
				};
			})
	},

	"click #btn_random_profilePic":function(event, template){
		var usernames1 = ["Grinsender", "Kreischender", "Schöner", "Wachsamer", "Großer", "Weißer", "Starker", "Mutiger", "Tanzender", "Blauer", "Roter", "Listiger", "Kräftiger", "Furchtloser", "Silberner", "Anmutiger", "Mächtiger", "Mystischer", "Potenter", "Wohlriechender", "Launischer", "Lebensfroher", "Geheimnisvoller", "Grimmiger", "Optimistischer", "Pessimistischer", "Respektabler", "Impulsiver", "Dominanter", "Romantischer", "Kaltblütiger", "Schüchterner", "Japsender", "Tauchender", "Rülpsender", "Pfeifender", "Sturer", "Kitzliger", "Flinker", "Kleiner", "Verrückter", "Abgedrehter", "Hyperaktiver", "Trotzender", "Cooler", "Krasser", "Schlauer"];
		var usernames2 = ["Hummer", "Wolf", "Büffel", "Wurm", "Adler", "Stier", "Hund", "Blutegel", "Hirsch", "Pinguin", "Papagei", "Hamster", "Hase", "Nacktmul", "Zander", "Dachs", "Igel", "Blobfisch", "Flamingo", "Leopard", "Maulwurf", "Elch", "Steinbock", "Esel", "Blauwal", "Gekko", "Käfer", "Salamander", "Grizzly", "Puma", "Gepard", "Elefant", "Luchs", "Uhu", "Waschbär", "Pfau", "Fasan", "Schwan", "Rochen", "Affe", "Schimpanse", "Orang-Utan", "Kabeljau", "Aal", "Thunfisch", "Schmetterling", "Eisbär", "Tiger", "Hai", "Panda", "Mops", "Pavian", "Orka", "Dackel", "Gorilla", "Storch", "Frosch", "Krake", "Pelikan", "Koala"];
		var profilbilder = ["/profilbilder/profilbild1.jpg", "/profilbilder/profilbild2.jpg", "/profilbilder/profilbild3.jpg", "/profilbilder/profilbild4.jpg", "/profilbilder/profilbild5.jpg", "/profilbilder/profilbild6.jpg", "/profilbilder/profilbild7.jpg", "/profilbilder/profilbild8.jpg", "/profilbilder/profilbild9.jpg", "/profilbilder/profilbild10.jpg", "/profilbilder/profilbild11.jpg", "/profilbilder/profilbild12.jpg", "/profilbilder/profilbild13.jpg", "/profilbilder/profilbild14.jpg", "/profilbilder/profilbild15.jpg", "/profilbilder/profilbild16.jpg", "/profilbilder/profilbild17.jpg", "/profilbilder/profilbild18.jpg", "/profilbilder/profilbild19.jpg", "/profilbilder/profilbild20.jpg" ];

		Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profilbild": Random.choice(profilbilder)}} );
		Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": Random.choice(usernames1)+" "+Random.choice(usernames2)}} ); 
	},
	"click #btn_upload_profilePic":function(event, template){
		$('#fileInput').click();
	},
	"change #fileInput":function(event, template){
		FS.Utility.eachFile(event, function(file) {
			Images.insert(file, function (err, fileObj) {
				if (err){
					alert("Error " + err.reason);
				} else {
					var url = "/cfs/files/images/" + fileObj._id;
					Session.set('photo6', url);
					Meteor.users.update({_id:Meteor.userId()}, {$set: {"profile.profilbild":Session.get("photo6")}} );
				}
			});
		});
	}

})