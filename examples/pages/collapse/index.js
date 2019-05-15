Page({
    data: {
        value: null
    },
    onChange(e) {
        const { value } = e.detail;
        this.setData({
            value
        })
    }
})