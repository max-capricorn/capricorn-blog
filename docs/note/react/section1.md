### react15 
react16中以expirationTime的大小来衡量优先级, expirationTime越大, 优先级越高
### react16 
### react17

### react 17  reconciler

#### 大致的找到变化的组件的逻辑

react 发生一次更新的时候, 比如ReactDOM.reader/setState, 都会从Fiber Root 开始从上往下遍历，然后逐一找到变化的节点。构建完成会形成一颗Fiber Tree。 在react 内部会同时存在俩颗Fiber树。

#### 双缓存结构
在 React 中 最多会同时存在俩颗Fiber树。当前屏幕上显示内容对应的Fiber树成为current Fiber树，正在内存中构建的Fiber树 称为 workInProgress Fiber树。

current Fiber树 中的Fiber节点 被称为current fiber，workInProgress Fiber树 中的Fiber节点被称为 workInProgress fiber， 她们通过alternate 属性连接。

如果之前没有Fiber Tree 就逐级创建Fiber Tree； 如果存在Fiber Tree， 会构建一个WorkInProgress Tree， 这个tree 的Fiber节点可以服用current 

#### commit 阶段---负责将变化的组件渲染到页面上

- commitBeforeMutationEffects （DOM操作前）
 - 处理DOM节点 渲染/删除后的autoFocus、blur逻辑
 - 调用getSnapshotBeforeUpdate 生命周期钩子
 - 调度useEffect 也是一个异步的东西, 不会阻塞 useEffect ==> componentDidMount


### hooks 源码分析
1. 为什么会有hooks？ 解决了什么样的问题？
class 组件只能通过props把state 传递过来
function Component 刚开始做UI组件 没有定义state的能力 
function Component + hooks 可以做到更简洁
可以做到更方便的抽取逻辑
2. hooks 的基本用法
  useContext + useReducer + context = redux
  useEffect  模拟生命周期  componentDidMount/didUpdate/willUnmount
  useMemo 缓存一个值
  useCallback  缓存一个function
  useRef  ref在function里使用
  useState  定义state改变state的方式
  hooks常见的几大问题: 
    1. 死循环
    2. capture value 通过ref来解决
3. hooks 的原理浅析 ReactFiberHooks.js 
  1. useState 的3个阶段
     1. MountState
     2. DispatchAction
     3. UpdateState
  2. useEffect的俩个阶段
     1. MountEffect
     2. UpdateEffect

### 简版的实现
```js

let state
const useState = function (defaultState) {
  function setState(newState) {
    state = newState
  }
  
  if(!state) {
    state = defautState
  }

  return [state, setState]
}
```



