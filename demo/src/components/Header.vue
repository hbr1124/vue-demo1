<template>
    <div>
        <h1>这是Header组件</h1>
        <h2>{{str}}</h2>
        <button @click='btn'>{{Hstr}}</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Hstr:'这是Header组件的数据'
        }
    },
    methods:{
        btn(){
            this.$emit('changeHstr',this.Hstr)
        }
    },
    props:['str']
}
</script>
