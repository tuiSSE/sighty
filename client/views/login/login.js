Template.login.rendered=function(){
	   $(document).ready(function(){
    $('ul.tabs').tabs();
  });
}

Template.login.events({
	"click #btn_login_login":function(event, template){
		emailVar = template.find("#email_login").value;
		passwordVar = template.find("#password_login").value;
		Meteor.loginWithPassword(emailVar, passwordVar, function(){
			if (Meteor.user()) {
				if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")){
					Router.go("homeHelper")
				} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
					Router.go("homeBlind")
				};
			};
		})
	},
	"click #btn_register_register":function(event, template){
		emailVar = template.find("#email_register").value;
		passwordVar = template.find("#password_register").value;
		var usernames1 = ["Grinsender", "Kreischender", "Schöner", "Wachsamer", "Großer", "Weißer", "Starker", "Mutiger", "Tanzender", "Blauer", "Roter", "Listiger", "Kräftiger", "Furchtloser", "Silberner", "Anmutiger", "Mächtiger", "Mystischer", "Potenter", "Wohlriechender", "Launischer", "Lebensfroher", "Geheimnisvoller", "Grimmiger", "Optimistischer", "Pessimistischer", "Respektabler", "Impulsiver", "Dominanter", "Romantischer", "Kaltblütiger", "Schüchterner", "Japsender", "Tauchender", "Rülpsender", "Pfeifender", "Sturer", "Kitzliger", "Flinker", "Kleiner", "Verrückter", "Abgedrehter", "Hyperaktiver", "Trotzender", "Cooler", "Krasser", "Schlauer"];
		var usernames2 = ["Hummer", "Wolf", "Büffel", "Wurm", "Adler", "Stier", "Hund", "Blutegel", "Hirsch", "Pinguin", "Papagei", "Hamster", "Hase", "Nacktmul", "Zander", "Dachs", "Igel", "Blobfisch", "Flamingo", "Leopard", "Maulwurf", "Elch", "Steinbock", "Esel", "Blauwal", "Gekko", "Käfer", "Salamander", "Grizzly", "Puma", "Gepard", "Elefant", "Luchs", "Uhu", "Waschbär", "Pfau", "Fasan", "Schwan", "Rochen", "Affe", "Schimpanse", "Orang-Utan", "Kabeljau", "Aal", "Thunfisch", "Schmetterling", "Eisbär", "Tiger", "Hai", "Panda", "Mops", "Pavian", "Orka", "Dackel", "Gorilla", "Storch", "Frosch", "Krake", "Pelikan", "Koala"];
		var profilbilder = ["/profilbilder/profilbild1.jpg", "/profilbilder/profilbild2.jpg", "/profilbilder/profilbild3.jpg", "/profilbilder/profilbild4.jpg", "/profilbilder/profilbild5.jpg", "/profilbilder/profilbild6.jpg", "/profilbilder/profilbild7.jpg", "/profilbilder/profilbild8.jpg", "/profilbilder/profilbild9.jpg", "/profilbilder/profilbild10.jpg", "/profilbilder/profilbild11.jpg", "/profilbilder/profilbild12.jpg", "/profilbilder/profilbild13.jpg", "/profilbilder/profilbild14.jpg", "/profilbilder/profilbild15.jpg", "/profilbilder/profilbild16.jpg", "/profilbilder/profilbild17.jpg", "/profilbilder/profilbild18.jpg", "/profilbilder/profilbild19.jpg", "/profilbilder/profilbild20.jpg" ];

		trimInput = function(value) {
			return value.replace(/^\s*|\s*$/g, '');
		};

		isNotEmpty = function(value) {
			if (value && value !== ''){
				return true;
			}
			window.alert('Bitte füllen Sie alle erforderlichen Felder aus.');
			return false;
		};

		isEmail = function(value) {
			var filter =  /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-]+.+[a-zA-Z0-9]{2,4})+$/;
			if (filter.test(value)) {
				return true;
			}
			window.alert('Bitte geben Sie eine gültige Email ein.');
			return false;
		};

		isValidPassword = function(passwordVar) {
			if (passwordVar.length < 6) {
				window.alert('Ihr Passwort solte mindestens 6 Zeichen lang sein.');
				return false;
			}
			return true;
		};

		if (isNotEmpty(emailVar) && isNotEmpty(passwordVar) && isEmail(emailVar) && isValidPassword(passwordVar)) {

			Accounts.createUser({
				profile: {
					profilbild: Random.choice(profilbilder)
				},
				email: emailVar,
				password: passwordVar,
				username: Random.choice(usernames1) + " " + Random.choice(usernames2)
			})

			Meteor.loginWithPassword(emailVar, passwordVar, function(){
				if (Meteor.user()) {
					Router.go("chooseUserclass")
				};
			})
		}

	},
	"click #btn_login_facebook":function(event, template){
		Meteor.loginWithFacebook(function(){
			if (Meteor.user()) {
				if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
					Router.go("homeHelper")
				} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
					Router.go("homeBlind")
				};
			};
		});
	},
	"click #btn_login_twitter":function(event, template){
		Meteor.loginWithTwitter(function(){
			if (Meteor.user()) {
				if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
					Router.go("homeHelper")
				} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
					Router.go("homeBlind")
				};
			};
		});
	},
	"click #btn_register_facebook":function(event, template){
		var usernames1 = ["Grinsender", "Kreischender", "Schöner", "Wachsamer", "Großer", "Weißer", "Starker", "Mutiger", "Tanzender", "Blauer", "Roter", "Listiger", "Kräftiger", "Furchtloser", "Silberner", "Anmutiger", "Mächtiger", "Mystischer", "Potenter", "Wohlriechender", "Launischer", "Lebensfroher", "Geheimnisvoller", "Grimmiger", "Optimistischer", "Pessimistischer", "Respektabler", "Impulsiver", "Dominanter", "Romantischer", "Kaltblütiger", "Schüchterner", "Japsender", "Tauchender", "Rülpsender", "Pfeifender", "Sturer", "Kitzliger", "Flinker", "Kleiner", "Verrückter", "Abgedrehter", "Hyperaktiver", "Trotzender", "Cooler", "Krasser", "Schlauer"];
		var usernames2 = ["Hummer", "Wolf", "Büffel", "Wurm", "Adler", "Stier", "Hund", "Blutegel", "Hirsch", "Pinguin", "Papagei", "Hamster", "Hase", "Nacktmul", "Zander", "Dachs", "Igel", "Blobfisch", "Flamingo", "Leopard", "Maulwurf", "Elch", "Steinbock", "Esel", "Blauwal", "Gekko", "Käfer", "Salamander", "Grizzly", "Puma", "Gepard", "Elefant", "Luchs", "Uhu", "Waschbär", "Pfau", "Fasan", "Schwan", "Rochen", "Affe", "Schimpanse", "Orang-Utan", "Kabeljau", "Aal", "Thunfisch", "Schmetterling", "Eisbär", "Tiger", "Hai", "Panda", "Mops", "Pavian", "Orka", "Dackel", "Gorilla", "Storch", "Frosch", "Krake", "Pelikan", "Koala"];
		var profilbilder = ["/profilbilder/profilbild1.jpg", "/profilbilder/profilbild2.jpg", "/profilbilder/profilbild3.jpg", "/profilbilder/profilbild4.jpg", "/profilbilder/profilbild5.jpg", "/profilbilder/profilbild6.jpg", "/profilbilder/profilbild7.jpg", "/profilbilder/profilbild8.jpg", "/profilbilder/profilbild9.jpg", "/profilbilder/profilbild10.jpg", "/profilbilder/profilbild11.jpg", "/profilbilder/profilbild12.jpg", "/profilbilder/profilbild13.jpg", "/profilbilder/profilbild14.jpg", "/profilbilder/profilbild15.jpg", "/profilbilder/profilbild16.jpg", "/profilbilder/profilbild17.jpg", "/profilbilder/profilbild18.jpg", "/profilbilder/profilbild19.jpg", "/profilbilder/profilbild20.jpg" ];

		Meteor.loginWithFacebook(function(){
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": Random.choice(usernames1)+" "+Random.choice(usernames2)}} );
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profilbild": Random.choice(profilbilder)}} );
			if (Meteor.user()) {
				Router.go("chooseUserclass")
			};
		});
	},
	"click #btn_register_twitter":function(event, template){
		var usernames1 = ["Grinsender", "Kreischender", "Schöner", "Wachsamer", "Großer", "Weißer", "Starker", "Mutiger", "Tanzender", "Blauer", "Roter", "Listiger", "Kräftiger", "Furchtloser", "Silberner", "Anmutiger", "Mächtiger", "Mystischer", "Potenter", "Wohlriechender", "Launischer", "Lebensfroher", "Geheimnisvoller", "Grimmiger", "Optimistischer", "Pessimistischer", "Respektabler", "Impulsiver", "Dominanter", "Romantischer", "Kaltblütiger", "Schüchterner", "Japsender", "Tauchender", "Rülpsender", "Pfeifender", "Sturer", "Kitzliger", "Flinker", "Kleiner", "Verrückter", "Abgedrehter", "Hyperaktiver", "Trotzender", "Cooler", "Krasser", "Schlauer"];
		var usernames2 = ["Hummer", "Wolf", "Büffel", "Wurm", "Adler", "Stier", "Hund", "Blutegel", "Hirsch", "Pinguin", "Papagei", "Hamster", "Hase", "Nacktmul", "Zander", "Dachs", "Igel", "Blobfisch", "Flamingo", "Leopard", "Maulwurf", "Elch", "Steinbock", "Esel", "Blauwal", "Gekko", "Käfer", "Salamander", "Grizzly", "Puma", "Gepard", "Elefant", "Luchs", "Uhu", "Waschbär", "Pfau", "Fasan", "Schwan", "Rochen", "Affe", "Schimpanse", "Orang-Utan", "Kabeljau", "Aal", "Thunfisch", "Schmetterling", "Eisbär", "Tiger", "Hai", "Panda", "Mops", "Pavian", "Orka", "Dackel", "Gorilla", "Storch", "Frosch", "Krake", "Pelikan", "Koala"];
		var profilbilder = ["/profilbilder/profilbild1.jpg", "/profilbilder/profilbild2.jpg", "/profilbilder/profilbild3.jpg", "/profilbilder/profilbild4.jpg", "/profilbilder/profilbild5.jpg", "/profilbilder/profilbild6.jpg", "/profilbilder/profilbild7.jpg", "/profilbilder/profilbild8.jpg", "/profilbilder/profilbild9.jpg", "/profilbilder/profilbild10.jpg", "/profilbilder/profilbild11.jpg", "/profilbilder/profilbild12.jpg", "/profilbilder/profilbild13.jpg", "/profilbilder/profilbild14.jpg", "/profilbilder/profilbild15.jpg", "/profilbilder/profilbild16.jpg", "/profilbilder/profilbild17.jpg", "/profilbilder/profilbild18.jpg", "/profilbilder/profilbild19.jpg", "/profilbilder/profilbild20.jpg" ];
		Meteor.loginWithTwitter(function(){
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": Random.choice(usernames1)+" "+Random.choice(usernames2)}} );
			Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profilbild": Random.choice(profilbilder)}} );
			if (Meteor.user()) {
				Router.go("chooseUserclass")
			};
		})
	}
})