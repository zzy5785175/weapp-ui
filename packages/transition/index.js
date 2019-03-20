const transitionBehaviors = require('../behaviors/transition');
Component({
    behaviors: [transitionBehaviors],
    externalClasses: ['custom-class'],
    properties: {
        name: {
            type: String,
            value: 'fade'
        }
    }
});