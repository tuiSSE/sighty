Template.forgotPassword.events({
'submit #forgotPasswordForm': function (event, template) {
    event.preventDefault();

    var forgotPasswordForm = $(event.currentTarget),
        email = forgotPasswordForm.find('#forgotPasswordEmail').val().toLowerCase();

    Accounts.forgotPassword({email: email}, function (err) {
        if (err) {
            if (err.message === 'User not found [403]') {
                alert('Diese Email existiert nicht.');
            } else {
                alert('Leider ist etwas schief gelaufen. Versuchen sie es erneut.');
            }
        } else {
            alert(unescape('Email wurde gesendet. %DCberpr%FCfen Sie Ihren Posteingang.'));
        }
        Accounts.urls.resetPassword = function (token) {
            return Meteor.absoluteUrl('https://sighty.theoinf.tu-ilmenau.de/#/reset-password/' + token);
        };
    });

},

"click #btn_gobackto_login2": function(event, template){
        Router.go("/")
}


})

