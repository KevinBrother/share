setRem()

function setRem() {
    const htmlFontSize = document.documentElement.clientWidth / 20
    document.documentElement.style.fontSize = htmlFontSize + 'px'
}
// 改变窗口大小时重新设置 rem
window.onresize = function () {
    setRem()
}