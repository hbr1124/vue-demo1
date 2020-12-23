<template>
  <div>
    <h1>{{str}}</h1>


    <!-- 属性用参数 -->
    <input type="text" v-bind:value="inputVal">
    <br>
    <input v-bind:type="inputType">
    <!-- 简写 -->
    <input type="text" :value="inputType">


    <!-- 绑定事件 -->
    <button v-on:click="btnClick">按钮</button>
    <!-- 简写 -->
    <button @click='btnClick2'>按钮2</button>

    <!-- v-html,v-text跟jQuery的一样 -->
    <h1 v-html="txt"></h1>
    <h2 v-text="txt"></h2>

    <!--虚拟dom,重新渲染-->
    <button @click="changeStr">改变str</button>

    <!-- 数据双向绑定 -->
    <input type="text" v-model="str">

    <!-- v-once，不会被改变数据 -->
    <div v-once>{{str}}</div>

    <!-- 条件渲染：v-if -->
    <h1 v-if="arr.length>0">{{arr}}</h1>
    <h1 v-if="arr.length===3">33333</h1>
    <h1 v-else>没东西</h1>

    <!--列表渲染：v-for-->
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,index) in arr" :key="(item,index)">{{item}}{{index}}</li>
    </ul>

    <!-- v-if,v-for结合使用 -->
    <ul v-if="arr.length>0">
      <li v-for='item in arr' :key="item">{{item}}</li>
    </ul>
    <h1 v-else>没东西</h1>

    <!--组件
        组件放在components文件夹中,组件名称首字母大写
        1.创建组件文件(.vue结尾的文件都是组件)
        2.引入组件import xxx from '文件路径'
        3.在js部分的components中设置key:value的形式，可以只写key，value和xxx名称要一致
        4.在template里使用<key的名称></key的名称>-->
    <Footer></Footer>


    <!--父组件传数据给子组件
        1.<子组件 :变量='数据'></子组件>
        2.在子组件的js部分的props中接受数据props:['变量']
        下面的str是data里面的str，:变量名是随意的，但在子组件中接受的时候需要保持一致-->
    <Header :str='str' @changeHstr='changeHstr'></Header>

    <!--子组件传数据给父组件(自定义事件)
        1.在子组件中添加事件例如：<button @click='btn'>按钮</button>
        1.子组件的js部分的methods中的btn函数设置this.$emit('自定义事件名称','传递给父组件的值')
        2.<子组件 @自定义事件名称='函数名(在父组件的js部分的methods中设置)'></子组件>
        3.父组件中：methods:{
          函数名(形参){
            console.log(形参)   形参就是子组件传递过来的数据
          }
        }-->

    <!--兄弟组件之间的传值
        1.创建一个公共的js文件并且引入Vue，然后在抛出实例化后的vue如下，每个兄弟组件都要引入这个js文件：
                  import Vue from 'vue';
                  export default  new Vue;
        2.传数据的组件：<button @click=btn>点击给Header组件传值</button>设置事件
        3.传数据的组件：methods:{
                          btn(){
                            bus.$emit('自定义事件名称',要传输的数据)
                          }
                        }
        4.接收数据的组件：computed:{
                            conStr(){
                              bus.$on('自定义事件名称',(形参)=>{
                                  console.log(形参);  //形参就是传过来的数据
                              })
                            }
                        }
          或：created:{ //生命周期
                  add(){
                      bus.$on("Fstr",(data)=>{
                          return data;
                      })
                  }
              }
        5.接收数据的组件：在template部分使用：{{conStr}}，名字要对应
    -->
    <Swie></Swie>

    <!-- axios
        1.下载axios：npm install axios --save
        2.在main.js中引入：import axios from 'axios'
                          Vue.prototype.axios = axios
        3. -->

    






  </div>
</template>

<script>
import Footer from './components/Footer';
import Header from './components/Header';
import Swie from './components/Swie';
export default{
  data(){
    return {
      str:'你好吗',
      inputVal:'不太好',
      inputType:'password',
      txt:'<input type="text" value="哈喽">',
      arr:['小金人','奥斯卡','凡尔赛']
    }
  },
  components:{
    Footer,
    Header,
    Swie
  },
  computed:{

  },
  methods:{
    btnClick(){
      alert(111)
    },
    btnClick2(){
      alert(222)
    },
    changeStr(){
      this.str='略略略';
    },
    changeHstr(s){
      console.log(s)
    }
  }
}

</script>

