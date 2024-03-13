
/**
 * 
 * @param {*} totalWidth  750
 * @param {*} part 20
 * @returns 
 */
function genRem(designSize = 750, precision = 6) {
    document.documentElement.style.fontSize = document.documentElement.clientWidth + 'px';
    return function (px) {  
        return (px / designSize).toFixed(6);
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