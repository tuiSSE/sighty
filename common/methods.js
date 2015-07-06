//this file is for forms validation can
//be accessed from both server and client

Meteor.absoluteUrl("https://sighty.theoinf.tu-ilmenau.de");
Meteor.absoluteUrl.defaultOptions.rootUrl = "https://sighty.theoinf.tu-ilmenau.de";
Accounts.emailTemplates.siteName = "Sighty";
Accounts.emailTemplates.from = "Sighty Team <sightyteam@gmail.com>";
Accounts.emailTemplates.resetPassword.subject = function (user) {
    return "So setzen Sie Ihr Sighty-Passwort zurueck"
};
Accounts.emailTemplates.resetPassword.text = function(user, url) {
    url = url.replace('#/', '');
    return "Hallo, \nklicken Sie auf diesen Link, um ihr Passwort zuruecksetzen zu koennen: \n" + url + "\n\nIhr Sighty Team";
};

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
    }
});
