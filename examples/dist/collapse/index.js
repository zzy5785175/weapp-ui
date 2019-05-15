Component({
    externalClasses: [],
    relations: {
        '../collapse-item/index': {
            type: 'child',
            linked(target) {
                const { childrens } = this.data;
                childrens.push(target);
                this.setData({
                    childrens
                }, () => {
                    this._updateChild();
                });
            }
        }
    },
    properties: {
        value: {
            type: null,
            value: null,
            observer: function(newVal, oldVal) {
                this._updateChild();
            }
        },
        accordion: {
            type: Boolean,
            value: false
        }
    },
    data: {
        childrens: []
    },
    methods: {
        _updateChild() {
            this.data.childrens.forEach(child => {
                child.updateItemExpand();
            });
        },
        onChage(name, expand) {
            console.log('expand: ', expand);
            let { accordion } = this.data;
            let emitValue;
            if (accordion) {
                emitValue = expand ? name : '';
            }
            this.triggerEvent('change', { value: emitValue });
        }
    }
});