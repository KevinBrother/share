/**
 *  设计稿宽度 750
 *  元素像素大小： xx
 *  
 */
function resetPx2vw(designSize) {

    return function px2vw(pxValue) {
        const clientWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const ratio = designSize / clientWidth

        // 将px值转换为vw单位
        const vwValue = pxValue * ratio;
        return vwValue + 'vw';
    } 
}


function px2Vw(pxValue) {
    // 获取视口宽度
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // 将px值转换为vw单位
    const vwValue = (pxValue / vw) * 100;
    return vwValue + 'vw';
  }
  



// clientWidth = 100
// designSize = 40 
// px = 25;
// vw = 50

// clientWidth 900
// designSize = 750

// ratio = 750 / 900 = 0.834

// px = 375



// vw 50

