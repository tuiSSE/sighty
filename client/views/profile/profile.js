Router.map(function(){
	this.route("profile", {path: "/profile"})
})

Template.profile.rendered=function(){
	$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
}

Template.profile.helpers({
	username: function(){
		return Meteor.user().username;
	},
	email: function(){
		return Meteor.user().emails[0].address;
	},
	profilbild:function(){
		return Meteor.user().profile.profilbild;
	},
	email2:function(){
		return Meteor.user().profile.email;
	},
	img:function(){
		return Session.get("img");
	}
})

Template.profile.events({
	"click #btn_goto_home1":function(event,template){
		if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
			Router.go("homeHelper")
		} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
			Router.go("homeBlind")
		};
	},
	"click #btn_goto_home2":function(event,template){
		if (Roles.userIsInRole({_id: Meteor.userId()}, "helper")) {
			Router.go("homeHelper")
		} else if (Roles.userIsInRole({_id: Meteor.userId()}, "blind")) {
			Router.go("homeBlind")
		};
	},
	"click #btn_logout_profile1":function(event, template){
		Meteor.logout();
		Router.go("login")
	},
	"click #btn_logout_profile2":function(event, template){
		Meteor.logout();
		Router.go("login")
	},
	"click #btn_change_profile":function(event, template){

		Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": template.find("#username_profile").value}} );

		Router.go("profile")
	},
	"click #btn_randomUsername":function(event,template){
				var usernames = [	
							"kitchenfilm",
							"vomitcroup",
							"poofbluff",
							"potskaput",
							"gloverainy",
							"penitentrock",
							"stonesminor",
							"vibratocevian",
							"lowerascend",
							"westernseeing",
							"stranderosion",
							"pseudobuttercream",
							"verdantsludge",
							"orientaltingly",
							"corruptcloud",
							"portlydial",
							"gerbilpungent",
							"wastefulfrail",
							"scotlandfahrenheit",
							"duckflee",
							"pelterrant",
							"shoescylinder",
							"kettlerise",
							"spookyfartlek",
							"densityera",
							"silverharmonic",
							"virusgland",
							"spiritsswoosh",
							"velocitydrown",
							"venomedaids",
							"throattwinkling",
							"landmarkszero",
							"zealglitch",
							"preservelungs",
							"skinningcatch",
							"catchercottage",
							"pascalschallah",
							"reachencourage",
							"gemmellow",
							"amberboned",
							"tollsteamer",
							"astatinearchitect",
							"mewsplain",
							"staticsjack",
							"utopianeridanus",
							"kickingbehave",
							"pleasedadhesion",
							"samsungleft",
							"hedgehogfixnum",
							"sideribs",
							"perkyembedded",
							"quaoarburberry",
							"fearfulwind",
							"montaguglass",
							"glueconstant",
							"unthinkingimply",
							"anodeposset",
							"nosedmagnetic",
							"strawberrycervical",
							"snuffleboob",
							"croupbleach",
							"coalcurved",
							"featuresthick",
							"saysoulful",
							"watchgale",
							"jointedfollowing",
							"constituentpeasant",
							"bonebin",
							"pluckyharsh",
							"luminousmason",
							"balmpick",
							"toasterspreader",
							"unequalrashers",
							"vulturegrowth",
							"avogadroarcher",
							"teemingbrayton",
							"blythjoule",
							"floatingmeasures",
							"variablehardness",
							"brentodbc",
							"listbalk",
							"hazardyeasty",
							"piedhertz",
							"sinesnutty",
							"catspatula",
							"rampallianfeet",
							"silicatebiomass",
							"solidheadlamp",
							"tartiron",
							"illiteratealter",
							"faradayheart",
							"showmodel",
							"acrobaticfoil",
							"enchantedrace",
							"surfergive",
							"bugbelly",
							"terminatorcrocodile",
							"dispenseronion",
							"blenderlarge",
							"peppersresolute",
							"wavegrotesque",
							"bakeryosmosis",
							"escapepeaceful",
							"waferssyringe",
							"indiumgenome",
							"loofanfare",
							"wmlchesty",
							"distincttuck",
							"italiandevoted",
							"arenamovement",
							"aspiringrms",
							"shortbreadabsolute",
							"lordsourdough",
							"bashfuljacket",
							"crystallineflow",
							"bintallegro",
							"hitair",
							"rulehealth",
							"leadencautious",
							"painerough",
							"waterjoule",
							"fagstissue",
							"makingsubstance",
							"faintshameful",
							"wornoutsoothe",
							"vacuumhands",
							"sinklump",
							"facenormal",
							"badlacerta",
							"panoramicwiggling",
							"meltedinnocent",
							"wetsuitdamsire",
							"fancydeli",
							"calcitesiphon",
							"virgocrummy",
							"gliderubbish",
							"slovenlyfaced",
							"playingcucumber",
							"compilerbrush",
							"boilinglawyer",
							"mineralhistorical",
							"tonguepie",
							"kneeexaminer",
							"nocturnalpillar",
							"constantpork",
							"perigeetube",
							"grammariansandstone",
							"buildingabsolute",
							"boozerlacking",
							"parkourexponent",
							"rightvolcanic",
							"anginaradiate",
							"roguejump",
							"measlyswain",
							"erstloose",
							"advancedflange",
							"charmingproduct",
							"employeebuttress",
							"worthwhilecluck",
							"denebcrusty",
							"latesnotty",
							"smartphalange",
							"jointserpentine",
							"signkosher",
							"xiphoidliving",
							"humiliatedpuffy",
							"micsedate",
							"fossachaffinch",
							"tensionfoot",
							"peatdevelop",
							"staffsoup",
							"rapidnapkin",
							"tolerantmalicious",
							"chromatewoodlark",
							"portalslender",
							"sourescape",
							"hobblebrawny",
							"westtissue",
							"cheeseyaccepting",
							"browniannasty",
							"shakertoffee",
							"morainepointers",
							"chuckletilted",
							"pointprick",
							"chloridessouth",
							"leaderline",
							"sparsenissan",
							"firenothing",
							"lovingquark",
							"consistdispirited",
							"trainedmusician",
							"ryepiscis",
							"molalityforce",
							"antibodyerratic",
							"pulleyfitter",
							"powerwild",
							"suckingunit",
							"homesicksault",
							"berkmodified",
							"sportliver"
]

		Meteor.users.update({_id: Meteor.userId()}, {$set: {"username": Random.choice(usernames)}} );
		Router.go("profile")
	},
	"click #btn_delete_profile":function(event, template){
		Meteor.users.remove({_id: Meteor.userId()});
		Router.go("userDeleted")
	},
	"click #btn_random_profilePic":function(event, template){
		var profilbilder = ["/profilbilder/profilbild1.jpg", "/profilbilder/profilbild2.jpg", "/profilbilder/profilbild3.jpg", "/profilbilder/profilbild4.jpg", "/profilbilder/profilbild5.jpg", "/profilbilder/profilbild6.jpg", "/profilbilder/profilbild7.jpg", "/profilbilder/profilbild8.jpg",
"/profilbilder/profilbild9.jpg", "/profilbilder/profilbild10.jpg", "/profilbilder/profilbild11.jpg", "/profilbilder/profilbild12.jpg", "/profilbilder/profilbild13.jpg", "/profilbilder/profilbild14.jpg", "/profilbilder/profilbild15.jpg", 
"/profilbilder/profilbild16.jpg", "/profilbilder/profilbild17.jpg", "/profilbilder/profilbild18.jpg", "/profilbilder/profilbild19.jpg", "/profilbilder/profilbild20.jpg" ];

		Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profilbild": Random.choice(profilbilder)}} );
		Router.go("profile")
	},
	"click #btn_change_profilePic":function(event, template){
		MeteorCamera.getPicture(function(err, data){
				if (err) {
					console.log("error", err);
				};
				if (data) {
					Session.set("img", data)
					Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.profilbild": Session.get("img")}} );
				};
			})
	}
})