// 鸭子类型，只要是两条腿，会嘎嘎嘎叫的
// 都是鸭子，国王只要听嘎嘎嘎就可以。
// 面向对象开发中，只要对象具有相同的方法，
// 就可以替代执行。代理模式
var duck = {
  duckSinging: function () {
    console.log('嘎嘎嘎');
  }
}
var chicken = {
  chickenSinging: function () {
    console.log('咯咯咯');
  },
  duckSinging: function () {
    console.log('嘎嘎嘎');
  }
}
var chior = [] //数组 合唱团
var joinChior = function (animal) {
  // 检测鸭但是没有类型检测
  // typeof 运算符，满足检测属性
  // 如果有并且是函数 就说明具有这个方法 方法也是接口
  // 具有相同接口 在js就里认为是一类对象
  if (animal && typeof animal.duckSinging === 'function') {
    chior.push(animal);//
    console.log('恭喜加入皇家合唱团');
    console.log('合唱团已有成员数量' + chior.length);
  }
  else {
    console.log('这里不属于你')
  }
}
joinChior(duck);
joinChior(chicken);
