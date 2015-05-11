//this file is for forms validation can
//be accessed from both server and client

Meteor.methods({
    addQuestion: function (newQues) {
        // Perform form validation
        if (newQues.text == "") {
            throw new Meteor.Error(413, "Missing Question!");
        }
        // Insert Ques (simulate on client, do it on server)
        return Questions.insert(newQues);
    }

});
