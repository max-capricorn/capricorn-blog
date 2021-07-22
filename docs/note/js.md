### js变量提升

在js代码运行过程中, 函数和变量都会提升, 如果函数和变量同名, 变量值为undefined, 那么会忽略变量。例如:

```javascript
test()
console.log(test)
var test = 1
function test() {}

// 执行阶段  此时这段代码 相当于是
function test() {}
var test
test()
console.log(test)
test = 1
```
还有一种提升 例如: 

```javascript
function test() {
  console.log(2)
}
function init() {
  if(false) {
    function test() {
      console.log(1)
    }
  }
  test()
}

// 执行阶段

function test() {}
function init() {
  var test
  if(false) {
    test = function () {
      console.log(1)
    }
  }
  test() // 报错 因为此时test值为undefined, 这是因为函数的私有变量 此时test先查找的变量为init函数内部的test变量 还不是全局的test函数
}
```

还有一种提升是 如果是在相同作用域下的同名函数, 后面的会覆盖前面的

> 总结
js变量提升: 
- 函数会比变量优先提升
- 如果遇到同名变量， 后面的会覆盖前面的
  - 如果变量是undefined， 函数提升优先, 会忽略变量