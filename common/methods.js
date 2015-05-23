//this file is for forms validation can
//be accessed from both server and client

Meteor.methods({
    addQuestion: function (newQues) {
        // Perform form validation
        if (newQues.text == "") {
            throw new Meteor.Error(413, "Empty field!");
        }
        // Insert Ques (simulate on client, do it on server)
        return Questions.insert(newQues);
    },
    addAnswer: function (newAns) {
        // Perform form validation
        if (newAns.text == "") {
            throw new Meteor.Error(413, "Empty field!");
        }
        // Insert Ques (simulate on client, do it on server)
        return Answers.insert(newAns);
    }

});
