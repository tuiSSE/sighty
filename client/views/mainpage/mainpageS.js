Router.map(function(){
    this.route("mainpageSehender", {path: "/mainpageS"})
  })

Template.mainpageSehender.helpers({
  questions: [{
    text: "Wo wohnt Totleben?",
    createdAt: new Date(),
    pictureUrl: "http://blog.ivanstanev.com/wp-content/gallery/bitte-bei-totleben-klingeln/Bitte_bei_TOTLEBEN_klingeln.jpg"
  }, {
    text: "Ist der cute?",
    createdAt: new Date(),
    pictureUrl: "http://animalfair.com/wp-content/uploads/2012/08/Funny-dog-hair-do-image.png"
  }, {
    text: "Was ist das?",
    createdAt: new Date(),
    pictureUrl: "http://www.boredomsquare.com/wp-content/uploads/2015/01/via-buymelaughs1.jpg"
  }],
});

Template.question.helpers({
  fromNow: function(date) {
    if (date)
      return moment(date).fromNow(true);
  }
});
