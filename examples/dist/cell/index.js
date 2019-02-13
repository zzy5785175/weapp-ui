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
        isLink: Boolean,
        linkType: String,
        url: String,
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        handleClick(e) {
            this.triggerEvent('click', e);
            if (!this.data.isLink || !this.data.url) return;
            wx[this.data.linkType]({ url: this.data.url });
        }
    }
});