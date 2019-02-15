Component({
    externalClasses: [],
    properties: {
        visible: Boolean,
        mask: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 99
        }
    },
    methods: {
        handleClick() {
            this.triggerEvent('click');
        },
        noop() {}
    }
});