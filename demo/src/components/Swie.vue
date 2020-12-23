<template>
    <div>
        <h1>这是Swie组件
            {{add}}
        </h1>
    </div>
</template>


<script>
import bus from './bus';
export default {
    created:{
        add(){
            bus.$on("Fstr",(data)=>{
                return data;
            })
        }
    }
}
</script>