Router.route("/", function(){
    this.render("login")
})

Router.route("/chooseUserclass", function(){
    this.render("chooseUserclass")
})

Router.route("/homeHelper", function(){
    this.render("homeHelper")
})

Router.route("/homeBlind", function(){
    this.render("homeBlind")
})

Router.route("/profile", function(){
    this.render("profile")
})

Router.route("/about", function(){
    this.render("about")
})

Router.route("/newQuestion", function(){
    this.render("newQuestion")
})

Router.route("/userDeleted", function(){
    this.render("userDeleted")
})

Router.route("/settings", function(){
    this.render("settings")
})

Router.route("/confirmdeletion", function(){
    this.render("confirmdeletion")
})
