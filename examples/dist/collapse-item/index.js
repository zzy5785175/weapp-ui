Component({
    externalClasses: ['body-class'],
    relations: {
        '../collapse/index': {
            type: 'parent',
            linked(target) {
                this.parent = target;
            }
        }
    },
    properties: {
        name: null,
        title: String
    },
    data: {
        isexpand: false,
        bodyHeight: 0,
        animationData: {}
    },
    ready() {
        this.animation = wx.createAnimation({
            duration: 300,
            timingFunction: 'ease'
        });
    },
    methods: {
        updateItemExpand() {
            const { value, accordion } = this.parent.data;
            const { name, isexpand } = this.data;
            let update;
            if (accordion) {
                update = value === name;
            }
            else {
                update = value.some(item => item === name);
            }
            if (update !== isexpand) {
                this._updateStyle(update);
            }
            this.setData({
                isexpand: update
            });
        },
        handleTap() {
            const { name, isexpand } = this.data;
            this.parent.onChage(name, !isexpand);
        },
        _updateStyle(isexpand) {
            this._getElRect().then(rect => {
                let { height } = rect;
                height = isexpand ? height : 0;
                const animationData = this.animation
                    .height(height)
                    .step()
                    .export();
                this.setData({
                    animationData
                });
                // if (isexpand) {
                // }
                // else {
                //     this.setData({
                //         animationData
                //     });
                // }
            });
        },
        _getElRect() {
            return new Promise(resolve => {
                const query = wx.createSelectorQuery().in(this);
                query.select('.ui-collapse-item__body').boundingClientRect(function(res) {
                    resolve(res);
                }).exec();
            });
        },
        onTransitionEnd() {

        }
    }
});