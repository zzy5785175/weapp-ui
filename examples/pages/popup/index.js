Page({
    data: {
        visible: false,
        topVisible: false,
        rightVisible: false,
        bottomVisible: false,
        leftVisible: false,
        target: null
    },
    handleClick(e) {
        const { target } = e.target.dataset;
        this.setData({
            [target]: true,
            target
        });
    },
    onClose(e) {
        this.setData({
            [this.data.target]: false
        });
    }
})