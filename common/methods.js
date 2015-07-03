//this file is for forms validation can
//be accessed from both server and client

Meteor.methods({
    addQuestion: function (newQues) {
        // Perform validation
        if (newQues.text == "") {
            throw new Meteor.Error(413, "Empty field!");
        }
        // Insert Ques (simulate on client, do it on server)
        return Questions.insert(newQues);
    },
    addAnswer: function (newAns) {
        // Perform validation
        if (newAns.text == "") {
            throw new Meteor.Error(413, "Empty field!");
        }
        // Insert Ques (simulate on client, do it on server)
        return Answers.insert(newAns);
    },
    updateQuestion: function (question) {
      // Perform validation
      if (question.text == "") {
          throw new Meteor.Error(413, "Empty field!");
      }
      Questions.update({text: question.text},
                       {pic1Id: question.pic1Id},
                       {pic2Id: question.pic2Id},
                       {pic3Id: question.pic3Id},
                       {pic4Id: question.pic4Id});
    },
    serverNotification: function () {
      //get only helpers
        var allUsers = Meteor.users.find().fetch();
        var helpers = [];
        var j=0;
        for (var i = 0; i < allUsers.length; i++) {
          if (allUsers[i].roles[0] == "helper")
          {
            helpers[j] = allUsers[i];
            j++;
          }
        }
        if(helpers){
          Push.send({
            from: Meteor.user().username,
            title: 'you have unseen notifications',
            text: 'new Question was asked',
            query: {}
          });
        }
	  }
});
