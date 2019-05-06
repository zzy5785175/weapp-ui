const transitionBehaviors = require('../behaviors/transition');
Component({
    behaviors: [transitionBehaviors],
    externalClasses: ['custom-class'],
    properties: {
        customStyle: String,
        zIndex: {
            type: Number,
            value: 99
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center'
        }
    },
    methods: {
        onClickOverlay() {
            this.triggerEvent('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.triggerEvent('close');
            }
        }
    }
});