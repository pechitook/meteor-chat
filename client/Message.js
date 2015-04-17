Template.Message.helpers({
    belongsToMe: function(message) {
        return message.user._id == Meteor.userId();
    },
    belongsToOther: function(message) {
        return message.user._id != Meteor.userId();
    }
});

Template.Message.onRendered(function() {
    goToEnd();
});

var goToEnd = function() {
    $('.messages')[0].scrollTop = $('.messages')[0].scrollHeight;
}
