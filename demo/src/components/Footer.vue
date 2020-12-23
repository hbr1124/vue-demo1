<template>
    <div>
        <h1>这是Footer组件</h1>
        <button @click=btn>点击给Header组件传值</button>
    </div>
</template>


<script>
import bus from './bus';
export default {
    data(){
        return {
            fStr:'这是Footer组件的数据'
        }
    },
    methods:{
        btn(){
            bus.$emit('Fstr',this.fStr)
        }
    }
}
</script>