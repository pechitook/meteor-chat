Template.Chat.rendered = function() {
    goToEnd();
}

Template.Chat.events({
    'submit form': function(e) {
        e.preventDefault();
        var input = $(e.currentTarget).find('[name=message]');
        var message = input.val();
        if (!message.trim()) return null;
        if (!Meteor.user()) return Meteor.loginWithTwitter({}, function(){})
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
        var messages = Messages.find({});
        messages.observe({
            added: function(message) {
              goToEnd();
            }
        });
        return messages;
    },
    belongsToMe: function(message) {
        return message.user._id == Meteor.userId();
    },
    belongsToOther: function(message) {
        return message.user._id != Meteor.userId();
    }
});


goToEnd = function() {
    $('.messages')[0].scrollTop = $('.messages')[0].scrollHeight;
}
