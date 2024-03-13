
/**
 * 
 * @param {*} totalWidth  750
 * @param {*} part 20
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




// function a() {
//     return function() {
//         console.log('first', first)
//     }
// }