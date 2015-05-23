/*Cofiguring file for photo upload plugin
(only necessary if deploying as a Cordova app)
*/

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("upload"); // Cordova needs absolute URL
});
