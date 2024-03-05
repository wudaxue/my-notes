let timer =  ''//定时器名字
let countDownNum = '60'//倒计时初始值,
function countDown() {
  let that = this
  let countDownNum = countDownNum
  that.setData({
    timer: setInterval(function () {
      countDownNum--
      if (countDownNum == 0) {
        that.setData({
          countDownNum: 60
        })
        clearInterval(timer)
      }
    }, 1000)
  })
}