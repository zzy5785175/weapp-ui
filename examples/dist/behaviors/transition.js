module.exports = Behavior({
    behaviors: [],
    properties: {
        visible: {
            type: Boolean,
            value: false,
            observer: 'handleObserver'
        },
        customStyle: String,
        duration: {
            type: Number,
            value: 300
        }
    },
    lifetimes: {
        attached() {
            if (this.data.visible) {
                this.show();
            }
        }
    },
    data: {
        type: '',
        inited: false,
        display: false
    },
    methods: {
        show() {
            const { visible } = this.data;
            if (visible) {
                this.setData({
                    type: 'enter',
                    inited: true,
                    display: true
                });
            }
        },
        handleObserver(value) {
            if (value) {
                return this.show();
            }
            this.setData({
                type: 'leave'
            });
        },
        animationEnd() {
            const { visible } = this.data;
            if (!visible) {
                this.setData({
                    display: false
                });
            }
        }
    }
});