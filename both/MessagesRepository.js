Meteor.methods({
    createMessage: function(message) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("No user.");
        }
        Messages.insert({
            user: Meteor.user(),
            message: message,
            createdAt: new Date()
        });
    },
});
