const frameFn = {
    showTime: (frame) => {
        return `第${(frame*0.088).toFixed(2)}秒`
    }
}
module.exports = frameFn;