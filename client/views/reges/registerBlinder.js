Router.map(function(){
    this.route("registerBlinder01", {path: "/registerBlinder01"})
    this.route("registerBlinder02", {path: "/registerBlinder02"})
    this.route("registerBlinder03", {path: "/registerBlinder03"})
    this.route("registerBlinder04", {path: "/registerBlinder04"})
    this.route("registerBlinder05", {path: "/registerBlinder05"})
    this.route("mainpageBlinder", {path: "/mainpageB"})
  })

  Template.registerBlinder05.events({
    "click #register_confirm_2":function(event,template){
      event.preventDefault();
      Router.go("mainpageBlinder")
      }
    })
