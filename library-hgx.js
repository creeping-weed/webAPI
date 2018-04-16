//匀速动画，参数：要操作的元素对象；操作的属性与值（对象形式）；回调函数（可选）；
function animate(element, obj, fn) {
    for (var k in obj) {
        var linner = getStyle(k);
        var target = parseInt(obj[k]);
        go(k,linner,target);
    }
    function go(k,linner, target) {
        clearInterval(element.timer);
        element.timer = setInterval(function () {
            var temp = linner > target ? -8 : 8;
            if (Math.abs(target - linner) >= Math.abs(temp)) {
                linner += temp;
                element.style[k] = linner + 'px';
            } else {
                clearInterval(element.timer);
                element.style[k] = target+'px';
                if (fn) {
                    fn();
                }
            }
        }, 15)
    }
    function getStyle(item) {
        return parseInt(getComputedStyle(element)[item]);
    }
}


// 缓速动画，参数：要操作的元素对象；移动的距离，回调函数
function animate2(element,target,callback){
    if(element.timer){
        clearInterval(element.timer);
    }
    element.timer = setInterval(function(){
        var linner = element.offsetLeft;
        var setp = (target-linner) / 10;
        setp = setp>0?Math.ceil(setp):Math.floor(setp);
        linner += setp;
        element.style.left = linner+'px';
        if(linner == target){
            clearInterval(element.timer);
            if(callback){
                callback();
            }
        }
    },15)
}
