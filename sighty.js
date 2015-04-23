/* a small example to show how we work with the camera 
plz follow the instr in this link:
http://www.sitepoint.com/beginners-guide-mobile-development-meteor/
to prepare for mobile development with Meteor
and to download the needed packages
*/

if(Meteor.isClient){
    Template.takePhoto.events({
        'click .capture': function(){
            console.log("Button clicked.");
            MeteorCamera.getPicture({}, function(error, data){
                console.log(data);
                Session.set('photo', data);
            });
        }
    });

    Template.takePhoto.helpers({
        'photo': function(){
            return Session.get('photo');
        }
    });
}
