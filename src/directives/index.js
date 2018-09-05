let pointStyle = function () {
  return {
    top: Math.floor(Math.random() * window.innerHeight) + 'px',
    left: Math.floor(Math.random() * window.innerWidth) + 'px'
  };
};
let screenHig;

export const parallaxPoint = {
  bind (el, binding, vnode) {
    /*
    * - 렌덤으로 사이즈 및 포지션 잡아줌. 추후 삭제 하고 디자인에 맞게 위치 선정해줘야함.
    * */
    var styled = pointStyle();
    var size = (1 * binding.value.speed) * ((binding.value.speed * 10) * 15);
    el.style.cssText = 'top:' + styled.top + ';left:' + styled.left + ';width:' + size + 'px;height:' + size + 'px;';
  },
  update (obj, val) {
    screenHig = val.value.height;
    var beforeIndex = Math.round(val.value.y / screenHig);
    var nowIndex = Math.floor(val.value.y / screenHig);
    if (beforeIndex === val.value.index || nowIndex === val.value.index) {
      var index = beforeIndex === val.value.index ? beforeIndex : nowIndex;
      var a = val.value.y - (index * screenHig);
      var b = a * (val.value.speed * 1.25);
      obj.style.transform = 'translate(0, ' + b + 'px)';
    }
  }
};
