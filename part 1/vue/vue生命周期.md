# vue生命周期
## vue实例的声明周期
开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程  
## 各个生命周期流程
-   创建Vue对象(new vue)
-   beforeCreated:在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。  
-   created:实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。  
-   beforeMount:在挂载开始之前被调用：相关的 render 函数首次被调用。  
-   mounted:el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。  
-   beforeUpdate:数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。  
-   