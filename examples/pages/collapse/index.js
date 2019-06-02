Page({
    data: {
        value: null,
        value2: []
    },
    onChange(e) {
        const { value } = e.detail;
        this.setData({
            value
        })
    },
    onChange2(e) {
        const { value } = e.detail;
        console.log('value: ', value);
        this.setData({
            value2: value
        })
    }
})