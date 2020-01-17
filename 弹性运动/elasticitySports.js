/**
 * 弹性运动
 */
function startMove(obj, target) {
    clearInterval(obj.timer);
    let iSpeed = 40,
        a,
        u = 0.8;
    obj.timer = setInterval(function () {
        a = (target - obj.offsetLeft) / 10;  // 目标减去对象的offsetLeft / 10  弹动的范围
        iSpeed += a;  // 点击目标div 加上弹动范围
        iSpeed *= u;  // 点击目标div  弹动幅度
        if (Math.abs(iSpeed) <= 1 && Math.abs(target - obj.offsetLeft) <= 1) { // iSpeed 取绝对值 小于等于1 和 目标值 - offsetLeft 距离 取绝对值
            clearInterval(obj.timer);  //清除弹动的时间
            obj.style.left = target + 'px';  // 对象距左侧的距离赋值目标值
            // console.log(obj.style.left = target + 'px')
        } else {
            obj.style.left = obj.offsetLeft + iSpeed + 'px'; // 对象左侧距离和弹动
            // console.log(obj.style.left = obj.offsetLeft + iSpeed + 'px')
        }
        console.log(target);
    }, 30) // 设置一个动画时间
}