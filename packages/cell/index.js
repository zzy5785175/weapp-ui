Component({
    externalClasses: [],
    options: {
        multipleSlots: true
    },
    properties: {
        value: null,
        title: null,
        label: null,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        handleTap() {
            this.triggerEvent('click');
        }
    }
});