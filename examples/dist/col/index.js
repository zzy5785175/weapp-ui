Component({
    externalClasses: ['custom-class'],
    relations: {
        '../row/index': {
            type: 'parent'
        }
    },
    properties: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter(gutter) {
            let style = `padding-left: ${gutter / 2}px; padding-right: ${gutter / 2}px;`;
            this.setData({
                style: style
            });
        }
    }
});