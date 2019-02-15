Page({
    data: {
        visible: false
    },
    handleClick() {
        this.setData({
            visible: true
        });
        console.log('click');
    },
    getuserinfo(detail) {
        console.log('detail: ', detail);
    }
})