Component({
    externalClasses: ['custom-class'],
    properties: {
        size: String,
        type: {
            type: String,
            value: 'default'
        },
        plain: Boolean,
        round: Boolean,
        circle: Boolean,
        inline: Boolean,
        loading: Boolean,
        disabled: Boolean,
        openType: String,
        appParameter: String,
        hoverStopPropagation: Boolean,
        hoverStartTime: {
            type: Number,
            value: 20
        },
        hoverStayTime: {
            type: Number,
            value: 70
        },
        lang: {
            type: String,
            value: 'en'
        },
        sessionFrom: {
            type: String,
            value: ''
        },
        sendMessageTitle: String,
        sendMessagePath: String,
        sendMessageImg: String,
        showMessageCard: Boolean
    },
    methods: {
        handleTap() {
            const { loading, disabled } = this.data;
            if (loading || disabled) return false;
            this.triggerEvent('click');
        },
        bindcontact({ detail = {} } = {}) {
            this.triggerEvent('contact', detail);
        },
        bindgetuserinfo({ detail = {} } = {}) {
            this.triggerEvent('getuserinfo', detail);
        },
        bindgetphonenumber({ detail = {} } = {}) {
            this.triggerEvent('getphonenumber', detail);
        }
    }
});