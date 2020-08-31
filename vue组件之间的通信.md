##### 核心：找到数据之间交互的桥梁。如果两者能直接沟通就直接沟通，不能的话就找一个两者都能说得上话的人。

- #### props/$emit（父子通信）

  子组件通过props拿到父组件传过来的值，通过$emit来给触发父组件从而来传值。

  父组件

  ```
  <template>
    <Child :name="name" :age="age" @changeHandel="getParams"></Child>
  </template>
  
  <script>
  import Child from "@/views/Child.vue";
  export default {
    name: "Parent",
    data() {
      return {
        name: "小红",
        age: 18,
      };
    },
    components: {
      Child,
    },
    methods: {
      getParams(data) {
        console.log("从子组件获取到的值", data);
      },
    },
  };
  </script>
  <style></style>
  ```

  子组件

  ```
  <template>
    <div @click="handleClick">子组件</div>
  </template>
  
  <script>
  export default {
    name: "Child",
    props: {
      name: {
        type: String,
      },
      age: {
        type: Number,
      },
    },
    data() {
      return {
        a: 18
      };
    },
    created() {
      console.log("姓名", this.name);
      console.log("年龄", this.age);
    },
    methods: {
      handleClick() {
        this.$emit("changeHandel",this.a);
      },
    },
  };
  </script>
  <style></style>
  
  ```

  

- #### $refs/ref（父子通信）

  ref被用来给元素或子组件注册引用信息。引用信息将会被注册到父组件的$refs对象中。
  **如果在普通的DOM元素上，引用指向的就是DOM元素；如果用在子组件上，引用指向的就是组件实例**

  ref只是作为渲染结果被创建，在初次渲染的时候你不能访问，因为他们还不存在！也就是在created生命周期的时候还没存在，所以无法访问到。$refs 只有在组件渲染完成时候才会填充

  ```
  <template>
  <div>
    <div ref="myh1">vue1</div>
    <Child :name="name" :age="age" @changeHandel="getParams"></Child>
  </div>
  </template>
  
  <script>
  import Child from "@/views/Child.vue";
  export default {
    name: "Parent",
    data() {
      return {
        name: "小红",
        age: 18,
      };
    },
    components: {
      Child,
    },
    created(){
      console.log(this.$refs.myh1.innerText) //此处报错
    },
    methods: {
      getParams(data) {
        console.log(this.$refs.myh1.innerText)  //输出vue
        console.log("从子组件获取到的值", data); 
      },
    },
  };
  </script>
  <style></style>
  
  ```

  通过refs可以获取到子组件的方法

  父组件

  ```
  <template>
  <div>
    <div>refs-parent</div>
    <Child ref="msg"></Child>
  </div>
    
  </template>
  
  <script>
  import Child from '@/views/refs/Child.vue'
  export default {
      name:'Refs',
      components:{
          Child,
      },
      mounted(){
          console.log(this.$refs.msg);
          this.$refs.msg.getMessage('hello world')
      }
  }
  
  </script>
  <style>
  </style>
  ```

  子组件

  ```
  <template>
    <div>child-refs</div>
  </template>
  
  <script>
  export default {
      name:"Child",
      data(){
          return{
              message:'子组件'
          }
      },
      mounted(){
      console.log(this.message)
          console.log("子组件的值")
      },
      methods:{
          getMessage(m){
              console.log("+++getmessage+++");
              console.log("从父组件传过来的值",m)
          }
          
      }
  
  }
  
  </script>
  <style>
  </style>
  ```

  父组件可以通过this.$refs.msg来获取子组件的属性，方法，从而来调用的方法或者使用其属性。

  $refs/ref和props通信的区别：

  1. props着重于数据的传递，它并不能调用组件里的方法和属性。
  2. $refs/ref着重于索引，主要用来调用组件里的属性和方法，并不擅长数据传递。

- $children/$parent（父子通信）

- $attrs/$listeners（父子通信）

- provide/inject（父子通信、跨级通信）

- eventBus（父子通信、跨级通信、兄弟通信）

  定义一个全局变量eventBus,创建一个eventBus.js

  ```
  import Vue from 'vue'
  let eventBus = new Vue();
  export default eventBus;
  ```

  然后在哪里需要就在哪里引用，使用

  ```
  eventBus.$emit和eventBus.$on来触发和监听，从而来实现传值
  ```

  父组件

  ```
  <template>
  <div>
    <div>parent-eventBus</div>
    <Child></Child>
  </div>
  </template>
  
  <script>
  import EventBus from '@/eventBus.js'
  import Child from '@/views/eventBus/Child.vue'
  export default {
     name:'EventBus',
     components:{
          Child
     },
     mounted(){
         EventBus.$on('change',(a)=>{
             console.log(a)
         })
     }
  }
  </script>
  <style>
  </style>
  ```

  子组件

  ```
  <template>
    <div @click="changeEvent">chile-eventBud</div>
  </template>
  
  <script>
  import eventBus from '@/eventBus.js'
  export default {
      name:'Child',
      data(){
          return{
              a:'event-bus'
          }
      },
      methods:{
          changeEvent(){
              eventBus.$emit('change',this.a)
          }
      }
  }
  </script>
  <style>
  </style>
  ```

  不仅是父子组件之间通信，跨级也是可以通信的，哪里需要哪里引用就好了。

- vuex（父子通信、跨级通信、兄弟通信、路由视图级别通信）

  vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应规则保证状态以一种可预测的方式发生改变。

   

- localStorage/sessionStorage等基于浏览器客户端的存储（父子通信、跨级通信、兄弟通信、路由视图级别通信）

- 后端

