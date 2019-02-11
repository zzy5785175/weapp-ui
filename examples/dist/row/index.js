Component({
    relations: {
        '../col/index': {
            type: 'child',
            linked(target) {
                this.setGutter();
            }
        }
    },
    properties: {
        gutter: {
            type: Number,
            value: 0
        },
        type: String,
        justify: String,
        align: String
    },
    lifetimes: {
        ready() {
            this.setGutter();
        }
    },
    data: {
        style: ''
    },
    methods: {
        setGutter() {
            const gutter = Number(this.data.gutter);
            if (!gutter) return;
            const margin = `-${gutter / 2}px`;
            this.setData({
                style: `margin-left: ${margin}; margin-right: ${margin}`
            });
            const nodes = this._getAllChild();
            nodes.forEach(element => {
                element.setGutter(gutter);
            });
        },
        _getAllChild() {
            return this.getRelationNodes('../col/index');
        }
    }
});