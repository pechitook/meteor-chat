Template.Chat.events({
    'submit form': function(e) {
        e.preventDefault();
        var input = $(e.currentTarget).find('[name=message]');
        var message = input.val();
        if (!message.trim()) return null;
        if (!Meteor.user()) return alert('You need to login first');
        Messages.insert({
            user: Meteor.user(),
            message: message,
            createdAt: new Date()
        });
        input.val('');
        goToEnd();
    }
});

Template.Chat.helpers({
    messages: function() {
        return Messages.find({});
    }
});
