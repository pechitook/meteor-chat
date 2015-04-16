Template.Layout.onRendered(function() {
    slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 200,
        'tolerance': 70
    });
});

Template.Layout.events({
  'click [data-action=open-menu]': function(){
    slideout.toggle();
  }
});
