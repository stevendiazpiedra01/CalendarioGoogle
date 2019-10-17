mobiscroll.settings = {
    lang: 'es',
    theme: 'ios',
    display: 'bubble'
};

var now = new Date();

mobiscroll.calendar('#demo-calendar-mobile', {
    controls: ['calendar', 'time'],
    onInit: function(event, inst) {
        inst.setVal(now, true);
    }
});

mobiscroll.calendar('#demo-calendar-desktop', {
    controls: ['calendar', 'time'],
    touchUi: false,
    onInit: function(event, inst) {
        inst.setVal(now, true);
    }
});

mobiscroll.calendar('#demo-calendar-header', {
    controls: ['calendar', 'time'],
    headerText: '{value}',
    onInit: function(event, inst) {
        inst.setVal(now, true);
    }
});

mobiscroll.calendar('#demo-calendar-non-form', {
    controls: ['calendar', 'time'],
    onInit: function(event, inst) {
        inst.setVal(now, true);
    }
});

var instance = mobiscroll.calendar('#demo-calendar-external', {
    controls: ['calendar', 'time'],
    showOnTap: false,
    showOnFocus: false,
    onInit: function(event, inst) {
        inst.setVal(new Date(), true);
    }
});

document
    .getElementById('show-demo-calendar-external')
    .addEventListener('click', function() {
        instance.show();
    }, false);