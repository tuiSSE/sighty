//this file is for forms validation can
//be accessed from both server and client

Meteor.methods({
    addQuestion: function (newQues) {
        // Perform validation
        if (newQues.text == "" && newQues.text != null) {
            throw new Meteor.Error(413, "Empty field!");
        }
        // Insert Ques (simulate on client, do it on server)
        return Questions.insert(newQues);
    },
    addAnswer: function (newAns) {
        // Perform validation
        if (newAns.text == "" && newAns.text != null) {
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
    }
});
