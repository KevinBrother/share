
/**
 * 
 * @param {*} designSize 
 * @param {*} precision 
 * @param {*} part 
 * @returns 
 */
function genRem(designSize = 750, precision = 6, part = 20) {
    const htmlElementSize = (document.documentElement.clientWidth / part) + 'px';
    document.documentElement.style.fontSize = htmlElementSize;

    return function (px) {  
        return (px / designSize * part).toFixed(precision);
    }
}

let px2rem = genRem();

// 改变窗口大小时重新设置 rem
window.onresize = function () {
    px2rem = genRem();
}


// function pxToRem(pxValue) {
//     // 获取根元素的字体大小（以像素为单位）
//     const rootFontSize = '16px';
//     document.documentElement.style.fontSize = rootFontSize;
//     // 将px值转换为rem单位
//     const remValue = pxValue / rootFontSize;
//     return remValue + 'rem';
//   }



// function a() {
//     return function() {
//         console.log('first', first)
//     }
// }