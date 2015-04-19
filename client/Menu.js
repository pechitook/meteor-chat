Template.Menu.events({
    'click [data-action=login-twitter]': function() {
        slideout.close();
        return Meteor.loginWithTwitter({}, function(err) {
            if (err) {
                throw new Meteor.Error("Login with Twitter failed");
            }
        });
    },
    'click [data-action=logout]': function() {
        slideout.close();
        return Meteor.logout();
    }
});
